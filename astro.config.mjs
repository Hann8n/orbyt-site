import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://getorbyt.com',
  vite: {
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  },
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      configPath: 'wrangler.jsonc',
    },
    routes: {
      strategy: 'exclude',
      exclude: ['/css/*', '/fonts/*', '/images/*', '/favicon/*', '/js/*'],
    },
  }),
});
