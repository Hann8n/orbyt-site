import type { APIRoute } from 'astro';

const LOCALES = ['en', 'de', 'es', 'es-419', 'fr', 'ja', 'ko', 'pt-BR'];

export const prerender = false;

export const GET: APIRoute = ({ redirect, url }) => {
  const locale = url.searchParams.get('locale');
  const redirectTo = url.searchParams.get('redirect') || '/';

  if (!locale || !LOCALES.includes(locale)) {
    return redirect(redirectTo, 302);
  }

  const response = redirect(redirectTo, 302);
  response.headers.set(
    'Set-Cookie',
    `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`
  );
  return response;
};
