import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://getorbyt.com',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      configPath: resolve(process.cwd(), 'wrangler.jsonc'),
    },
  }),
});
