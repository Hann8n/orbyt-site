# AltStore PAL assets

- `orbyt-icon.png` — App icon (1024×1024), already added
- `source.json` — Hosted from this site
- `.altstore/adp/` — Keep extracted ADP contents here locally, then upload them to R2

Do not keep the ADP payload in `public/` when deploying to Cloudflare. The IPA files exceed the Workers static asset limit.

See docs/ALTSTORE_FINISH_SETUP.md for full instructions.
