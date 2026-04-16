import type { APIRoute } from 'astro';

const APP_STORE_URL = 'https://apps.apple.com/us/app/orbyt-video/id6751679299';

export const GET: APIRoute = () => {
  return Response.redirect(APP_STORE_URL, 308);
};
