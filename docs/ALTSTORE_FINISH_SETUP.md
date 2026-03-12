# Finish AltStore PAL Setup

Your app is approved, notarized, and AltStore PAL is configured. Complete these steps to make Orbyt available to EU and Japan users.

---

## Step 1: Download the ADP (if you haven’t already)

Your previous zip may have been corrupted. Download a fresh copy:

```bash
cd /Users/jack/orbyt-master/orbyt-app
./scripts/altstore-pal.sh download 4792c770-f63a-47d2-bd86-bb7254e8f9bf
```

This creates `orbyt-adp-4792c770-f63a-47d2-bd86-bb7254e8f9bf.zip` in the current directory.

---

## Step 2: Extract the ADP

```bash
cd /Users/jack/orbyt-master/orbyt-app
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

## Step 3: Upload ADP to getorbyt.com

Upload the extracted ADP contents so they are served at:

**Base URL:** `https://getorbyt.com/altstore/adp/`

Options:

### Option A: Add to orbyt-site (Cloudflare Pages)

1. Copy the extracted contents into `orbyt-site/public/altstore/adp/`:
   ```bash
   mkdir -p /Users/jack/orbyt-master/orbyt-site/public/altstore/adp
   cp -r /Users/jack/orbyt-master/orbyt-app/adp-extracted/* /Users/jack/orbyt-master/orbyt-site/public/altstore/adp/
   ```

2. Deploy orbyt-site.

3. Verify `manifest.json` is reachable at:
   https://getorbyt.com/altstore/adp/manifest.json

### Option B: Use a CDN or object storage

Upload the ADP directory to S3, R2, Backblaze B2, etc., and serve it under a path like `https://getorbyt.com/altstore/adp/` (via a redirect or proxy if needed).

---

## Step 4: Add app icon for AltStore

Copy the 1024×1024 app icon to the AltStore folder:

```bash
cp /Users/jack/orbyt-master/orbyt-app/src/assets/AppIcons/iOS/orbyt.png \
   /Users/jack/orbyt-master/orbyt-site/public/altstore/orbyt-icon.png
```

---

## Step 5: Update and host the source JSON

1. Edit `orbyt-app/altstore-pal-source.json`:

   - Confirm `downloadURL` is `https://getorbyt.com/altstore/adp/` (or the URL to `manifest.json`).
   - Set `size` from the IPA size in bytes (e.g. from `variants/*.ipa`).
   - Confirm `marketplaceID` is your app’s Apple ID from App Store Connect → App Information.

2. Copy the source to the site:

   ```bash
   cp /Users/jack/orbyt-master/orbyt-app/altstore-pal-source.json \
      /Users/jack/orbyt-master/orbyt-site/public/altstore/source.json
   ```

3. Deploy and verify:

   https://getorbyt.com/altstore/source.json

---

## Step 6: Federate (make it discoverable)

Once the source URL works, federate it so it appears on [explore.alt.store](https://explore.alt.store):

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"source": "https://getorbyt.com/altstore/source.json"}' \
  https://api.altstore.io/federate
```

---

## Summary

| Step | Action |
|------|--------|
| 1 | Download ADP with the script |
| 2 | Extract the zip (do not modify contents) |
| 3 | Upload ADP to `https://getorbyt.com/altstore/adp/` |
| 4 | Add `orbyt-icon.png` to `public/altstore/` |
| 5 | Copy and host `altstore-pal-source.json` as `source.json` |
| 6 | Federate via the API |

After this, EU and Japan users can add `https://getorbyt.com/altstore/source.json` in AltStore PAL and install Orbyt.
