import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import {
  readSource,
  writeSource,
  checkBearerAuth,
  DEFAULT_DOWNLOAD_URL,
  DEFAULT_MIN_OS,
} from '../../../../utils/altstore-source';

export const prerender = false;

const COOKIE_NAME = 'altstore_admin';

function isAuthorized(request: Request, cookies: { get(name: string): { value: string } | undefined }): boolean {
  if (checkBearerAuth(request, env.ADMIN_SECRET)) return true;
  return cookies.get(COOKIE_NAME)?.value === env.ADMIN_SECRET;
}

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAuthorized(request, cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { version, buildVersion, date, localizedDescription, size, downloadURL, minOSVersion } =
    body as Record<string, unknown>;

  if (!version || !buildVersion || !date || size === undefined) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields: version, buildVersion, date, size' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const newVersion = {
    version: String(version),
    buildVersion: String(buildVersion),
    date: String(date),
    ...(localizedDescription ? { localizedDescription: String(localizedDescription) } : {}),
    downloadURL: downloadURL ? String(downloadURL) : DEFAULT_DOWNLOAD_URL,
    size: Number(size),
    minOSVersion: minOSVersion ? String(minOSVersion) : DEFAULT_MIN_OS,
  };

  const source = await readSource(env.orbyt_altstore_adp);
  source.apps[0].versions.unshift(newVersion);
  await writeSource(env.orbyt_altstore_adp, source);

  return new Response(JSON.stringify({ success: true, version: newVersion }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const GET: APIRoute = async ({ request, cookies }) => {
  if (!isAuthorized(request, cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const source = await readSource(env.orbyt_altstore_adp);
  return new Response(JSON.stringify(source, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
