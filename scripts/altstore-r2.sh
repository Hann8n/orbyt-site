#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEFAULT_ADP_DIR="${ALTSTORE_ADP_DIR:-$ROOT_DIR/.altstore/adp}"
SOURCE_JSON="$ROOT_DIR/public/altstore/source.json"
DEFAULT_BUCKET_LOCATION="${R2_BUCKET_LOCATION:-weur}"
DEFAULT_CUSTOM_MANIFEST_URL="${ALTSTORE_CUSTOM_MANIFEST_URL:-https://downloads.getorbyt.com/manifest.json}"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/altstore-r2.sh setup <bucket> [adp_dir]
  ./scripts/altstore-r2.sh upload <bucket> [adp_dir]
  ./scripts/altstore-r2.sh release <bucket> <version> <build> <date> <size> [adp_dir]
  ./scripts/altstore-r2.sh set-source-url <manifest_url>
  ./scripts/altstore-r2.sh check <manifest_url>

Commands:
  setup           Create the R2 bucket if needed, enable the public r2.dev URL,
                  upload the ADP directory, and update public/altstore/source.json.
  upload          Upload the ADP directory to an existing R2 bucket.
  release         Upload ADP to R2 then call the admin API to publish a new version.
                  Requires ADMIN_SECRET env var. After this, open the admin UI to confirm.
  set-source-url  Update public/altstore/source.json to point at a manifest URL.
  check           Fetch a manifest URL and print the HTTP status.

Environment:
  ALTSTORE_ADP_DIR     Override the default ADP directory (.altstore/adp)
  R2_BUCKET_LOCATION   Override the bucket location hint (default: weur)
  ALTSTORE_CUSTOM_MANIFEST_URL
                       Preferred manifest URL after upload. Defaults to
                       https://downloads.getorbyt.com/manifest.json.
  ADMIN_SECRET         Required for the release command. Bearer token for the admin API.
  ADMIN_API_URL        Override the admin API URL (default: https://getorbyt.com/api/admin/altstore/release).
  ALTSTORE_DESCRIPTION Override the changelog text for the release command.
  ALTSTORE_MIN_OS      Override the minimum iOS version (default: 16.4).
EOF
}

fail() {
  echo "Error: $*" >&2
  exit 1
}

require_file() {
  local path="$1"
  [[ -f "$path" ]] || fail "Missing file: $path"
}

require_dir() {
  local path="$1"
  [[ -d "$path" ]] || fail "Missing directory: $path"
}

ensure_prereqs() {
  require_file "$SOURCE_JSON"
}

ensure_adp_dir() {
  local adp_dir="$1"
  require_dir "$adp_dir"
  require_file "$adp_dir/manifest.json"
  require_file "$adp_dir/signature"
  require_dir "$adp_dir/variant"
}

mime_type_for() {
  local file="$1"
  case "$file" in
    *.json)
      printf '%s' 'application/json'
      ;;
    *.png)
      printf '%s' 'image/png'
      ;;
    *.jpg|*.jpeg)
      printf '%s' 'image/jpeg'
      ;;
    *.ipa|*/signature|*.bin)
      printf '%s' 'application/octet-stream'
      ;;
    *)
      printf '%s' 'application/octet-stream'
      ;;
  esac
}

bucket_exists() {
  local bucket="$1"
  npx wrangler r2 bucket info "$bucket" >/dev/null 2>&1
}

create_bucket_if_needed() {
  local bucket="$1"

  if bucket_exists "$bucket"; then
    echo "Bucket '$bucket' already exists."
    return
  fi

  echo "Creating bucket '$bucket' in location '$DEFAULT_BUCKET_LOCATION'..."
  if ! npx wrangler r2 bucket create "$bucket" --location "$DEFAULT_BUCKET_LOCATION"; then
    echo >&2
    echo "Cloudflare rejected the bucket creation request." >&2
    echo "If the error includes code 10042, enable R2 once in the Cloudflare dashboard and run this command again." >&2
    exit 1
  fi
}

enable_dev_url() {
  local bucket="$1"

  echo "Enabling public r2.dev URL for '$bucket'..."
  npx wrangler r2 bucket dev-url enable "$bucket" >/dev/null
}

get_dev_url() {
  local bucket="$1"
  local output

  output="$(npx wrangler r2 bucket dev-url get "$bucket")"
  printf '%s\n' "$output" | sed -nE 's/.*(https:\/\/[^[:space:]]+\.r2\.dev).*/\1/p' | head -n 1
}

upload_adp() {
  local bucket="$1"
  local adp_dir="$2"

  ensure_adp_dir "$adp_dir"

  echo "Uploading ADP files from '$adp_dir' to bucket '$bucket'..."
  while IFS= read -r file; do
    local rel_path
    local content_type
    rel_path="${file#$adp_dir/}"
    content_type="$(mime_type_for "$file")"
    echo "  -> $rel_path"
    npx wrangler r2 object put "$bucket/$rel_path" --remote --file "$file" --content-type "$content_type" >/dev/null
  done < <(find "$adp_dir" -type f | sort)
}

set_source_url() {
  local manifest_url="$1"

  require_file "$SOURCE_JSON"

  node --input-type=commonjs - "$SOURCE_JSON" "$manifest_url" <<'NODE'
const fs = require('node:fs');
const [filePath, manifestUrl] = process.argv.slice(2);
const raw = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(raw);
if (!Array.isArray(json.apps) || json.apps.length === 0) {
  throw new Error('source.json has no apps array');
}
if (!Array.isArray(json.apps[0].versions) || json.apps[0].versions.length === 0) {
  throw new Error('source.json has no versions array');
}
json.apps[0].versions[0].downloadURL = manifestUrl;
fs.writeFileSync(filePath, `${JSON.stringify(json, null, 2)}\n`);
NODE

  echo "Updated source download URL to: $manifest_url"
}

check_url() {
  local url="$1"
  curl -sS -o /dev/null -w '%{http_code} %{url_effective}\n' "$url"
}

pick_manifest_url() {
  local dev_url="$1"
  local custom_status

  custom_status="$(curl -sS -o /dev/null -w '%{http_code}' "$DEFAULT_CUSTOM_MANIFEST_URL" || true)"

  if [[ "$custom_status" == "200" ]]; then
    printf '%s' "$DEFAULT_CUSTOM_MANIFEST_URL"
    return
  fi

  printf '%s' "$dev_url/manifest.json"
}

setup_bucket() {
  local bucket="$1"
  local adp_dir="${2:-$DEFAULT_ADP_DIR}"
  local dev_url
  local manifest_url

  ensure_prereqs
  ensure_adp_dir "$adp_dir"
  create_bucket_if_needed "$bucket"
  enable_dev_url "$bucket"
  upload_adp "$bucket" "$adp_dir"

  dev_url="$(get_dev_url "$bucket")"
  [[ -n "$dev_url" ]] || fail "Unable to determine r2.dev URL for bucket '$bucket'"

  manifest_url="$(pick_manifest_url "$dev_url")"
  set_source_url "$manifest_url"

  echo
  echo "R2 setup complete."
  echo "Manifest URL: $manifest_url"
  echo "Next: deploy the site so https://getorbyt.com/altstore/source.json serves the updated metadata."
}

publish_release() {
  local bucket="$1"
  local version="$2"
  local build="$3"
  local date="$4"
  local size="$5"
  local adp_dir="${6:-$DEFAULT_ADP_DIR}"
  local api_url="${ADMIN_API_URL:-https://getorbyt.com/api/admin/altstore/release}"
  local description="${ALTSTORE_DESCRIPTION:-}"
  local min_os="${ALTSTORE_MIN_OS:-16.4}"

  [[ -n "${ADMIN_SECRET:-}" ]] || fail "ADMIN_SECRET env var is required for the release command"

  echo "==> Uploading ADP to R2..."
  upload_adp "$bucket" "$adp_dir"

  echo
  echo "==> Publishing release v${version} (build ${build}) to admin API..."

  local payload
  payload="$(node --input-type=commonjs - <<NODE
const body = {
  version: ${version@Q},
  buildVersion: ${build@Q},
  date: ${date@Q},
  size: ${size},
  downloadURL: "${DEFAULT_CUSTOM_MANIFEST_URL}",
  minOSVersion: ${min_os@Q},
};
if (${description@Q}) body.localizedDescription = ${description@Q};
process.stdout.write(JSON.stringify(body));
NODE
)"

  local http_code
  http_code="$(curl -sS -o /tmp/altstore_release_response.json -w '%{http_code}' \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${ADMIN_SECRET}" \
    -d "$payload" \
    "$api_url")"

  if [[ "$http_code" == "200" ]]; then
    echo "Release published successfully."
    echo
    echo "Next: open https://getorbyt.com/admin/altstore to confirm and verify the release."
  else
    echo "Admin API returned HTTP ${http_code}:"
    cat /tmp/altstore_release_response.json 2>/dev/null || true
    echo
    fail "Release publish failed (HTTP ${http_code})"
  fi
}

main() {
  local command="${1:-}"

  case "$command" in
    setup)
      [[ $# -ge 2 ]] || fail "setup requires a bucket name"
      setup_bucket "$2" "${3:-$DEFAULT_ADP_DIR}"
      ;;
    upload)
      [[ $# -ge 2 ]] || fail "upload requires a bucket name"
      ensure_adp_dir "${3:-$DEFAULT_ADP_DIR}"
      upload_adp "$2" "${3:-$DEFAULT_ADP_DIR}"
      ;;
    release)
      [[ $# -ge 6 ]] || fail "release requires: <bucket> <version> <build> <date> <size> [adp_dir]"
      publish_release "$2" "$3" "$4" "$5" "$6" "${7:-$DEFAULT_ADP_DIR}"
      ;;
    set-source-url)
      [[ $# -eq 2 ]] || fail "set-source-url requires a manifest URL"
      set_source_url "$2"
      ;;
    check)
      [[ $# -eq 2 ]] || fail "check requires a manifest URL"
      check_url "$2"
      ;;
    -h|--help|help)
      usage
      ;;
    *)
      usage
      [[ -z "$command" ]] || exit 1
      ;;
  esac
}

main "$@"
