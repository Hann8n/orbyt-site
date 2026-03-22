import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://getorbyt.com',
  i18n: {
    locales: ['en', 'de', 'es', 'es-419', 'fr', 'ja', 'ko', 'pt-BR'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
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
