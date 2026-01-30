import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
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
});
