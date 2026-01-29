import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    imageService: 'cloudflare',
    routes: {
      extend: {
        include: [
          { pattern: '/@*' }, // Explicitly include routes starting with @
        ],
      },
    },
  }),
});
