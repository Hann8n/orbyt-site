#!/usr/bin/env node
/**
 * Generates locale page files for non-default locales.
 * Run: node scripts/generate-locale-pages.mjs
 */
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(__dirname, '..', 'src', 'pages');

const NON_DEFAULT_LOCALES = ['de', 'es', 'es-419', 'fr', 'ja', 'ko', 'pt-BR'];
const SLUGS = ['about', 'app', 'beta', 'contact', 'discord', 'terms', 'privacy'];

const indexTemplate = (locale) => `---
export const prerender = true;

import Base from '../../layouts/Base.astro';
import IndexContent from '../../components/pages/IndexContent.astro';
import { useTranslations, useTranslatedPath } from '../../i18n/utils';

const locale = '${locale}';
const t = useTranslations(locale);
const translatePath = useTranslatedPath(locale);
---

<Base lang={locale} title={t('index.title')} description={t('index.metaDescription')} canonicalUrl={"https://getorbyt.com/" + locale + "/"}>
  <div class="index-container">
    <div class="main-content">
      <IndexContent t={t} translatePath={translatePath} />
    </div>
  </div>
</Base>

<style>
  .index-container { max-width: 800px; margin: 0 auto; padding: 20px; min-height: 100vh; display: flex; flex-direction: column; }
  .main-content { flex: 1; display: flex; flex-direction: column; justify-content: center; }
</style>
`;

const slugTemplate = (locale, slug) => `---
export const prerender = true;

import LocaleSlugPage from '../../components/LocaleSlugPage.astro';

const locale = '${locale}';
const slug = '${slug}';
---

<LocaleSlugPage locale={locale} slug={slug} />
`;

async function main() {
  for (const locale of NON_DEFAULT_LOCALES) {
    const localeDir = join(pagesDir, locale);
    await mkdir(localeDir, { recursive: true });

    await writeFile(join(localeDir, 'index.astro'), indexTemplate(locale));

    for (const slug of SLUGS) {
      await writeFile(join(localeDir, `${slug}.astro`), slugTemplate(locale, slug));
    }
  }
  console.log('Generated locale pages for:', NON_DEFAULT_LOCALES.join(', '));
}

main().catch(console.error);
