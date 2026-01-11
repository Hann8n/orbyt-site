# Deployment Guide: GitHub Pages → Cloudflare Pages

This guide will help you migrate your site from GitHub Pages to Cloudflare Pages while keeping your DNS managed by Cloudflare.

## Current Setup
- **Domain**: getorbyt.com
- **DNS**: Managed by Cloudflare ✓
- **Current Hosting**: GitHub Pages
- **Target Hosting**: Cloudflare Pages
- **Repository**: https://github.com/Hann8n/orbyt-site

## Step 1: Connect Repository to Cloudflare Pages

1. **Log into Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** (in the left sidebar)
   - Click **Create application**
   - Select the **Pages** tab
   - Click **Connect to Git**

2. **Authorize GitHub**
   - Click **GitHub** (or select your Git provider)
   - Authorize Cloudflare to access your GitHub account
   - Select the repository: `Hann8n/orbyt-site`
   - Click **Begin setup**

## Step 2: Configure Build Settings

In the project configuration page, set:

- **Project name**: `orbyt-site` (or any name you prefer)
- **Production branch**: `main` (or your default branch)
- **Framework preset**: **Astro**
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty, or set if your Astro project is in a subdirectory)

**Note**: Cloudflare Pages should auto-detect Astro and pre-fill these settings, but verify them.

## Step 3: Environment Variables (if needed)

If your site uses any environment variables:
- Go to **Settings** → **Environment variables** in your Pages project
- Add any required variables (e.g., API keys, secrets)

For your site, you likely don't need any environment variables since you're using client-side API calls.

## Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Run the build (`npm run build`)
   - Deploy to a preview URL (e.g., `orbyt-site.pages.dev`)

## Step 5: Configure Custom Domain (getorbyt.com)

Since your DNS is already managed by Cloudflare, this is straightforward:

1. **In Cloudflare Pages Dashboard:**
   - Go to your Pages project
   - Navigate to **Custom domains**
   - Click **Set up a custom domain**
   - Enter: `getorbyt.com`
   - Click **Continue**

2. **Cloudflare will automatically:**
   - Update DNS records to point to Pages
   - Set up SSL/TLS certificates automatically
   - Configure the domain

3. **Verify DNS Settings:**
   - Go to **DNS** → **Records** in Cloudflare Dashboard
   - You should see a CNAME record for `getorbyt.com` pointing to your Pages deployment
   - Or an A/AAAA record if Cloudflare uses those

**Note**: The CNAME file in your repository is for GitHub Pages. Cloudflare Pages handles custom domains through their dashboard, so you can remove the CNAME file from your repo after migration (optional).

## Step 6: Disable GitHub Pages (After Testing)

Once you've verified everything works on Cloudflare Pages:

1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **None**
4. Click **Save**

This stops GitHub Pages from serving your site.

## Step 7: Test Your Deployment

1. **Test the Pages URL**: Visit `orbyt-site.pages.dev` (or your preview URL)
2. **Test Custom Domain**: Visit `getorbyt.com`
3. **Verify all routes**:
   - `/` (homepage)
   - `/beta`
   - `/terms`
   - `/privacy`
   - `/@[handle]` (profile routes)
   - `/@[handle]/[postId]` (post routes)
   - `/callback.html` (OAuth callback)
   - `/404` (404 page)

## Build Configuration Reference

Your `astro.config.mjs` is already configured correctly for Cloudflare:

```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    routes: {
      extend: {
        exclude: [
          { pattern: '/css/*' },
          { pattern: '/js/*' },
          { pattern: '/images/*' },
          { pattern: '/api/*' },
          { pattern: '/favicon_io/*' },
          { pattern: '/oauth-client-metadata.json' },
          { pattern: '/callback.html' },
        ],
      },
    },
  }),
});
```

This configuration:
- Uses the Cloudflare adapter for SSR support
- Excludes static assets from going through Workers (reduces function invocations)
- Supports hybrid rendering (prerendered static pages + SSR dynamic routes)

## Troubleshooting

### Build Fails

- Check build logs in Cloudflare Pages dashboard
- Ensure `package.json` has correct build script
- Verify Node.js version (Cloudflare Pages uses Node 20.x by default)

### Domain Not Working

- Verify DNS records in Cloudflare dashboard
- Check SSL/TLS settings (should be "Full" or "Full (strict)")
- Wait a few minutes for DNS propagation
- Clear browser cache

### Static Assets Not Loading

- Verify files are in `public/` directory
- Check that route excludes are configured correctly
- Ensure paths use absolute URLs (starting with `/`)

### SSR Routes Not Working

- Ensure routes have `export const prerender = false` in their `.astro` files
- Check Cloudflare Pages function logs for errors
- Verify adapter configuration in `astro.config.mjs`

## Benefits of Cloudflare Pages

1. **Free Tier**: 500 builds/month, unlimited requests, 100k function invocations/day
2. **Global CDN**: Fast content delivery worldwide
3. **Automatic SSL**: Free SSL certificates
4. **Preview Deployments**: Every PR gets a preview URL
5. **Better Integration**: Since DNS is already on Cloudflare, setup is seamless
6. **SSR Support**: Full support for server-side rendering with Workers

## Next Steps After Migration

1. Remove `CNAME` file from repository (optional, GitHub Pages specific)
2. Update any documentation that references GitHub Pages URLs
3. Set up custom domains for preview deployments (optional)
4. Configure deployment branches (production vs preview)

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Astro Cloudflare Adapter: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
