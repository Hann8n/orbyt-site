import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import sentry from '@sentry/astro';

export default defineConfig({
  site: 'https://getorbyt.com',

  devToolbar: {
    enabled: false,
  },

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
      exclude: ['/css/*', '/fonts/*', '/images/*', '/favicon/*', '/js/*', '/flags/*'],
    },
  }),

  integrations: [
    sentry({
      project: "javascript-astro",
      org: "orbyt-tech",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
});