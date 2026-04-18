import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://getorbyt.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es-MX', 'fr', 'ja', 'ko', 'pt-BR', 'es-419'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      'es-419': 'es-MX',
    },
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
      exclude: ['/css/*', '/fonts/*', '/images/*', '/favicon/*', '/js/*'],
    },
  }),
});
