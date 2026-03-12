# AltStore PAL assets

- `orbyt-icon.png` — App icon (1024×1024), already added
- `source.json` — Hosted from this site at `https://getorbyt.com/altstore/source.json`
- `.altstore/adp/` — Keep extracted ADP contents here locally, then upload them to R2

Default manifest host is `https://downloads.getorbyt.com/manifest.json`.
`r2.dev` is used only as fallback when the custom domain is not ready.

Do not keep the ADP payload in `public/` when deploying to Cloudflare. The IPA files exceed the Workers static asset limit.
Production traffic on `getorbyt.com/*` is served by the Worker route in `wrangler.jsonc`.

See docs/ALTSTORE_FINISH_SETUP.md for full instructions.
