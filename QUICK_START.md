# Quick Start: Deploy to Cloudflare Pages

## Summary

Your Astro site is ready to deploy to Cloudflare Pages! Here's what you need to do:

## Steps (5 minutes)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → **Create application** → **Pages** tab

2. **Connect GitHub Repository**
   - Click **Connect to Git**
   - Authorize Cloudflare to access GitHub
   - Select repository: `Hann8n/orbyt-site`
   - Click **Begin setup**

3. **Build Settings** (usually auto-detected)
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Deploy**
   - Click **Save and Deploy**
   - Wait for build to complete (~2-3 minutes)

5. **Add Custom Domain**
   - Go to **Custom domains** in your Pages project
   - Click **Set up a custom domain**
   - Enter: `getorbyt.com`
   - Cloudflare will automatically configure DNS (since you already manage DNS on Cloudflare)

6. **Disable GitHub Pages** (after verifying Cloudflare works)
   - GitHub repo → Settings → Pages → Source: **None**

## Build Configuration ✓

Your project is already configured correctly:
- ✅ Cloudflare adapter installed
- ✅ Build script configured (`npm run build`)
- ✅ Output directory: `dist`
- ✅ Route excludes configured for static assets
- ✅ SSR routes configured with `prerender = false`

## What Happens Next?

- Every push to `main` branch = automatic deployment
- Every PR = preview deployment with unique URL
- Custom domain `getorbyt.com` will point to Cloudflare Pages
- DNS stays managed by Cloudflare (no changes needed)

## Notes

- The `CNAME` file in your repo is for GitHub Pages - you can remove it after migration (optional)
- Cloudflare Pages handles custom domains through their dashboard
- SSL/TLS certificates are automatically provisioned and renewed

## Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.
