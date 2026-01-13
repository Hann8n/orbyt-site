const API_BASE_URL = 'https://api.getorbyt.com';
const API_TIMEOUT = 5000; // 5 seconds

function getApiToken(): string {
  // Access environment variable (Astro/Cloudflare Pages)
  // Type assertion needed because TypeScript doesn't know about Astro's env vars
  const env = (import.meta as any).env;
  return env?.ORBYT_API_TOKEN || '';
}

export interface ColorData {
  textColor: string;
  backgroundColor: string;
  joinedAt: string;
  isBeta: boolean;
}

/**
 * Make authenticated request to Orbyt API
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  
  const token = getApiToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Check your API token');
      }
      if (response.status === 404) {
        throw new Error('Not found');
      }
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('API request timeout');
    }
    throw error;
  }
}

/**
 * Get color data for a single DID
 */
export async function getColor(did: string): Promise<ColorData | null> {
  try {
    return await apiRequest<ColorData>(`/v1/colors/${encodeURIComponent(did)}`);
  } catch (error) {
    // Return null if profile not found (404) or other errors
    // This allows the page to render with default colors
    if (error instanceof Error && error.message.includes('Not found')) {
      return null;
    }
    // Log other errors but don't fail the page
    console.warn('Failed to fetch color data:', error);
    return null;
  }
}
