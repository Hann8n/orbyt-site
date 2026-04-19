/** Profile color theme returned by the Orbyt color API. */
export interface ColorData {
  textColor: string;
  backgroundColor: string;
  joinedAt: string;
  isBeta: boolean;
}

/** Minimal interface for the Cloudflare service binding to the `orbyt-api` Worker. */
export interface OrbytApiBinding {
  fetch(request: Request | string, init?: RequestInit): Promise<Response>;
}

/**
 * Fetches profile color theme data for a DID from the Orbyt API.
 * Tries targets in priority order: Cloudflare service binding → localhost (dev) → public API.
 * Returns `null` if all targets fail or return a non-OK status.
 */
export async function getColor(
  did: string,
  binding?: OrbytApiBinding
): Promise<ColorData | null> {
  const endpoint = `/v1/colors/${encodeURIComponent(did)}`;
  const targets: Array<{ url: string; fetcher: (url: string) => Promise<Response> }> = [];
  if (binding) {
    targets.push({
      url: `https://orbyt-api${endpoint}`,
      fetcher: (url) => binding.fetch(url),
    });
  } else if (import.meta.env.DEV) {
    targets.push({
      url: `http://127.0.0.1:8787${endpoint}`,
      fetcher: (url) => fetch(url),
    });
  }
  targets.push({
    url: `https://api.getorbyt.com${endpoint}`,
    fetcher: (url) => fetch(url),
  });

  for (const { url, fetcher } of targets) {
    try {
      const response = await fetcher(url);
      if (!response.ok) continue;
      return response.json();
    } catch (error) {
      console.warn('Color API attempt failed:', error instanceof Error ? error.message : error);
    }
  }

  return null;
}
