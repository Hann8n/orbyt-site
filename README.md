# orbyt-site

Website for orbyt, a video app for Bluesky.

<p align="left">
  <a href="https://github.com/Hann8n/orbyt-site">GitHub</a> · <a href="https://tangled.org/jack.orbyt.video/orbyt-site">Tangled</a> · <a href="https://getorbyt.com">Live site</a> · <a href="https://bsky.app/profile/getorbyt.com">Bluesky</a> · <a href="https://community.getorbyt.com">Community</a>
</p>

## Architecture

### Bluesky API (`src/utils/bluesky-api.ts`)

- Fetches profiles, posts, and video feeds from `https://public.api.bsky.app/xrpc`
- Key functions: `fetchProfile`, `fetchPost`, `fetchVideoPosts`, `resolveHandle`
- Handles video embeds (`app.bsky.embed.video#view`), thumbnails, HLS playlists
- 5s request timeout, URL/MIME helpers

### orbyt API (`src/utils/orbyt-api.ts`)

- Cloudflare Service Binding to `orbyt-api` worker
- `getColor(did, binding)` returns profile colors (textColor, backgroundColor, joinedAt, isBeta)
- Graceful fallback when binding unavailable

### RichText Parser (`src/utils/richtext.ts`)

- `parseRichText()`: @mentions (TLD required) → `/@handle`, URLs → external links
- XSS-safe HTML escaping, newline-to-`<br>` conversion

## Data Flow

**Profile page** (`/@[handle]`):

1. SSR: `fetchProfile`, `fetchVideoPosts` (parallel) → Bluesky
2. `getColor(profile.did)` via ORBYT_API binding
3. Cache: `s-maxage=60, stale-while-revalidate=300`
4. "Load more" pagination via Astro action `loadMorePosts`

**Post page** (`/@[handle]/[postId]`):

1. SSR: `resolveHandle` → DID, then `fetchPost` (getPosts XRPC)
2. Video URL from embed (playlist or `video.bsky.app/watch/...`)
3. HLS.js client-side playback, view transitions

**Static pages:** `/`, `/about`, `/beta`, `/app`, `/contact`, `/discord`, `/terms`, `/privacy` — all prerendered

## Deployment

- **Platform:** Cloudflare Pages (Astro adapter)
- **Config:** [wrangler.jsonc](wrangler.jsonc) — assets binding, ORBYT_API service
- **Site:** getorbyt.com (CNAME)

## Project Structure

```
orbyt-site/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Landing
│   │   ├── @[handle].astro          # Profile (SSR)
│   │   ├── @[handle]/[postId].astro # Post (SSR)
│   │   ├── about.astro, beta.astro, app.astro, ...
│   │   └── sitemap.xml.ts
│   ├── actions/index.ts             # loadMorePosts
│   └── utils/
│       ├── bluesky-api.ts           # Bluesky XRPC client
│       ├── orbyt-api.ts             # Color API binding
│       └── richtext.ts              # Mention/link parsing
├── public/                          # Static assets, CSS, favicon
├── astro.config.mjs
└── wrangler.jsonc
```

## Build Requirements

- Node.js 18+
- `npm install` then `npm run build`
- `npm run dev` for local dev (ORBYT_API binding optional)

## Dependencies

- **Astro** 5.x — SSG/SSR
- **@astrojs/cloudflare** — adapter, image service, platform proxy

## Clone & Run

```bash
git clone https://github.com/Hann8n/orbyt-site.git
cd orbyt-site
npm install
npm run dev
```

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b fix/something` or `git checkout -b feature/something`)
3. Make your changes
4. Open a PR against `main`

## Attributions

- **Figtree** font by [Erik Kennedy](https://fonts.google.com/specimen/Figtree) — [SIL Open Font License](https://scripts.sil.org/OFL)
- **HLS.js** — [Apache 2.0](https://github.com/video-dev/hls.js/blob/master/LICENSE)
- **Skeleton** CSS by Dave Gamache — MIT
- **normalize.css** — MIT

## License (MIT)

See [LICENSE](LICENSE) for the full license.

---

*Bluesky and AT Protocol are independent projects; this site is not officially affiliated.*
