import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://getorbyt.com',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      configPath: 'wrangler.jsonc',
    },
    routes: {
      strategy: 'include',
      include: ['/@*', '/@*/*'],
    },
  }),
});
