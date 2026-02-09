import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getorbyt.com',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.jsonc',
    },
    routes: {
      extend: {
        include: [
          { pattern: '/@*' }, // Explicitly include routes starting with @
        ],
      },
    },
  }),
  integrations: [sitemap()],
});
