import { env } from 'cloudflare:workers';

export const prerender = false;

export async function GET(): Promise<Response> {
  const upstream = await env.ORBYT_API.fetch('https://orbyt-api/v1/altstore/source.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const body = await upstream.text();
  const responseHeaders = new Headers();
  responseHeaders.set('Content-Type', 'application/json; charset=utf-8');
  responseHeaders.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');

  return new Response(body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
