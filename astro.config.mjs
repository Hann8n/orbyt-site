import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // output: 'static' is now the default and supports export const prerender = false for SSR routes
  adapter: cloudflare({
    routes: {
      extend: {
        include: [
          { pattern: '/@*' }, // Explicitly include routes starting with @
        ],
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
