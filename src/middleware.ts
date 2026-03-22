import { defineMiddleware } from 'astro:middleware';
import { getRelativeLocaleUrl } from 'astro:i18n';

const LOCALES = ['en', 'de', 'es', 'es-419', 'fr', 'ja', 'ko', 'pt-BR'];
const DEFAULT_LOCALE = 'en';

function getPreferredLocale(acceptLanguage: string | null): string | null {
  if (!acceptLanguage) return null;
  const parts = acceptLanguage.split(',').map((p) => {
    const [lang, q] = p.trim().split(';q=');
    return { lang: lang.split('-')[0].toLowerCase(), full: lang.trim(), q: q ? parseFloat(q) : 1 };
  });
  parts.sort((a, b) => b.q - a.q);
  for (const { lang, full } of parts) {
    const match = LOCALES.find((l) => l === full || l.startsWith(lang + '-'));
    if (match) return match;
  }
  return null;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  if (pathname.startsWith('/@')) {
    return next();
  }

  if (pathname === '/' || pathname === '') {
    const preferred = getPreferredLocale(context.request.headers.get('Accept-Language'));
    if (preferred && preferred !== DEFAULT_LOCALE) {
      const localeUrl = getRelativeLocaleUrl(preferred, '');
      return context.redirect(localeUrl, 302);
    }
  }

  return next();
});
