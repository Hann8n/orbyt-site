import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (typeof site === 'string' ? site : site?.href || 'https://getorbyt.com').replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];
  
  const pages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/app/', changefreq: 'monthly', priority: '0.8' },
    { path: '/beta/', changefreq: 'monthly', priority: '0.8' },
    { path: '/about/', changefreq: 'monthly', priority: '0.7' },
    { path: '/contact/', changefreq: 'monthly', priority: '0.6' },
    { path: '/discord/', changefreq: 'monthly', priority: '0.6' },
    { path: '/privacy/', changefreq: 'yearly', priority: '0.4' },
    { path: '/terms/', changefreq: 'yearly', priority: '0.4' },
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
