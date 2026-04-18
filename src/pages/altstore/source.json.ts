import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { readSource } from '../../utils/altstore-source';

export const prerender = false;

export const GET: APIRoute = async () => {
  const source = await readSource(env.orbyt_altstore_adp);

  return new Response(JSON.stringify(source, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
    },
  });
};
