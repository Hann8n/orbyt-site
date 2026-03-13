#!/usr/bin/env bash
# Delete Cloudflare Pages deployments to allow project deletion.
# Run from project root. Requires: wrangler, jq

set -euo pipefail

PROJECT_NAME="${1:-orbyt-site}"

echo "Deleting deployments for Pages project: $PROJECT_NAME"
echo ""

deleted=0
while true; do
  deployments=$(npx wrangler pages deployment list --project-name="$PROJECT_NAME" --json 2>/dev/null || echo "[]")
  count=$(echo "$deployments" | jq 'length')
  
  if [[ "$count" -eq 0 ]]; then
    echo "No more deployments."
    break
  fi
  
  echo "Found $count deployments remaining..."
  
  while IFS= read -r id; do
    echo "  Deleting: $id"
    npx wrangler pages deployment delete "$id" --project-name="$PROJECT_NAME" -f 2>/dev/null || true
    ((deleted++)) || true
    sleep 0.3
  done < <(echo "$deployments" | jq -r '.[].Id')
  
  sleep 1
done

echo ""
echo "Deleted $deleted deployments total."
