import type { APIRoute } from 'astro';
import { useTranslatedPath } from '../i18n/utils';
import { locales, defaultLang } from '../i18n/ui';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (typeof site === 'string' ? site : site?.href || 'https://getorbyt.com').replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const routes = [
    { path: '/', changefreq: 'weekly' as const, priority: '1.0' },
    { path: '/app', changefreq: 'monthly' as const, priority: '0.8' },
    { path: '/beta', changefreq: 'monthly' as const, priority: '0.8' },
    { path: '/about', changefreq: 'monthly' as const, priority: '0.7' },
    { path: '/contact', changefreq: 'monthly' as const, priority: '0.6' },
    { path: '/discord', changefreq: 'monthly' as const, priority: '0.6' },
    { path: '/privacy', changefreq: 'yearly' as const, priority: '0.4' },
    { path: '/terms', changefreq: 'yearly' as const, priority: '0.4' },
  ];

  const urlEntries: string[] = [];
  const translatePath = useTranslatedPath(defaultLang as 'en');

  for (const route of routes) {
    const path = route.path === '/' ? '/' : route.path;
    const alternateUrls = locales.map((locale) => ({
      locale,
      url: `${siteUrl}${translatePath(path, locale)}`,
    }));

    const defaultUrl = alternateUrls.find((a) => a.locale === defaultLang)!.url;
    const xhtmlLinks = [
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`,
      ...alternateUrls.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.locale}" href="${a.url}"/>`),
    ];

    for (const { url } of alternateUrls) {
      urlEntries.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${xhtmlLinks.join('\n')}
  </url>`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
