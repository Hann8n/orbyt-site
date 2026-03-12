# Finish AltStore PAL Setup

Your app is approved, notarized, and AltStore PAL is configured. Complete these steps to make Orbyt available to EU and Japan users.

**Prerequisites:** These instructions assume `orbyt-app` and `orbyt-site` are sibling directories (e.g. both under `orbyt-master`). Run commands from the parent directory, or adjust paths to your layout.

**Cloudflare note:** Do not deploy the ADP folder from `public/`. The IPA files are larger than Cloudflare Workers static asset limits. Use R2 for the ADP payload and keep only `source.json` and the icon on the website.

**Routing note:** `getorbyt.com/*` is served by the Cloudflare Worker route configured in `wrangler.jsonc`, so deploy production with `wrangler deploy`.

---

## Step 0: Enable R2 in Cloudflare

If you have not used R2 before, enable it once in the Cloudflare dashboard for your account.

Wrangler cannot create buckets until R2 is enabled.

---

## Step 1: Download the ADP (if you haven't already)

Your previous zip may have been corrupted. Download a fresh copy:

```bash
cd orbyt-app
./scripts/altstore-pal.sh download 4792c770-f63a-47d2-bd86-bb7254e8f9bf
```

This creates `orbyt-adp-4792c770-f63a-47d2-bd86-bb7254e8f9bf.zip` in the current directory.

---

## Step 2: Extract the ADP

```bash
cd orbyt-app
unzip orbyt-adp-4792c770-f63a-47d2-bd86-bb7254e8f9bf.zip -d adp-extracted
```

You should see something like:

```
adp-extracted/
  manifest.json
  signature
  variants/
    <uuid>.ipa
    ...
```

Important: do not modify `manifest.json` or change any file contents. Preserve the structure and file hashes.

---

## Step 3: Move the ADP out of `public/`

Keep the extracted ADP in a local staging folder inside `orbyt-site`, but outside the deployable `public/` directory:

```bash
mkdir -p orbyt-site/.altstore
rm -rf orbyt-site/.altstore/adp
mv orbyt-app/adp-extracted orbyt-site/.altstore/adp
```

The expected structure becomes:

```
orbyt-site/
  .altstore/
    adp/
      manifest.json
      signature
      variant/
        <uuid>.ipa
        ...
```

---

## Step 4: Upload ADP to Cloudflare R2

From `orbyt-site`, run:

```bash
npm run altstore:r2 -- setup orbyt-altstore-adp
```

This script will:

1. create the R2 bucket if needed
2. enable the public `r2.dev` URL (fallback)
3. upload `manifest.json`, `signature`, and `variant/*.ipa`
4. update `public/altstore/source.json` so `downloadURL` points to `https://downloads.getorbyt.com/manifest.json` when available, otherwise it falls back to `r2.dev`

If you want to use a different bucket name, replace `orbyt-altstore-adp` with your preferred name.

If you want a different manifest host, set `ALTSTORE_CUSTOM_MANIFEST_URL` before running setup.

---

## Step 5: Add app icon for AltStore

Copy the 1024×1024 app icon to the AltStore folder:

```bash
cp orbyt-app/src/assets/AppIcons/iOS/orbyt.png \
   orbyt-site/public/altstore/orbyt-icon.png
```

---

## Step 6: Deploy and verify the source JSON

1. Build and deploy the Worker route:

  ```bash
  cd orbyt-site
  npm run build
  npx wrangler deploy
  ```

  If you also deploy via Pages, note that Pages deploys alone do not update the `getorbyt.com/*` Worker route.

2. Verify the site source URL:

   https://getorbyt.com/altstore/source.json

3. Verify the ADP manifest URL stored inside `source.json` returns `200`.

---

## Step 7: Federate (make it discoverable)

Once the source URL works, federate it so it appears on [explore.alt.store](https://explore.alt.store):

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"source": "https://getorbyt.com/altstore/source.json"}' \
  https://api.altstore.io/federate
```

If AltStore returns a "pending approval" error, wait for approval and retry the same command.

---

## Summary

| Step | Action |
|------|--------|
| 0 | Enable R2 in Cloudflare once |
| 1 | Download ADP with the script |
| 2 | Extract the zip (do not modify contents) |
| 3 | Move the extracted ADP into `.altstore/adp/` |
| 4 | Run `npm run altstore:r2 -- setup <bucket>` |
| 5 | Add `orbyt-icon.png` to `public/altstore/` |
| 6 | Deploy the site and verify `source.json` |
| 7 | Federate via the API |

After this, EU and Japan users can add `https://getorbyt.com/altstore/source.json` in AltStore PAL and install Orbyt.

---

## Quick Release Checklist

Run from the parent folder containing both `orbyt-app` and `orbyt-site`.

```bash
# 1) Download fresh ADP from App Store Connect package ID
cd orbyt-app
./scripts/altstore-pal.sh download 4792c770-f63a-47d2-bd86-bb7254e8f9bf

# 2) Extract ADP
unzip orbyt-adp-4792c770-f63a-47d2-bd86-bb7254e8f9bf.zip -d adp-extracted

# 3) Stage ADP in orbyt-site (outside public)
cd ../orbyt-site
mkdir -p .altstore
rm -rf .altstore/adp
mv ../orbyt-app/adp-extracted .altstore/adp

# 4) Upload ADP to R2 and update public/altstore/source.json downloadURL
npm run altstore:r2 -- setup orbyt-altstore-adp

# 5) Deploy production route (getorbyt.com/*)
npm run build
npx wrangler deploy

# 6) Verify live URLs
curl -sS -o /dev/null -w 'source %{http_code}\n' https://getorbyt.com/altstore/source.json
curl -sS -o /dev/null -w 'manifest %{http_code}\n' https://downloads.getorbyt.com/manifest.json

# 7) Federate source
curl -X POST -H "Content-Type: application/json" -d '{"source":"https://getorbyt.com/altstore/source.json"}' https://api.altstore.io/federate
```

If federation returns a pending approval error, wait for approval and rerun only step 7.
