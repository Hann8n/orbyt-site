export interface ColorData {
  textColor: string;
  backgroundColor: string;
  joinedAt: string;
  isBeta: boolean;
}

// Service binding type for Worker-to-Worker calls
export interface OrbytApiBinding {
  fetch(request: Request | string, init?: RequestInit): Promise<Response>;
}

/**
 * Get color data for a single DID via Service Binding
 */
export async function getColor(
  did: string,
  binding: OrbytApiBinding
): Promise<ColorData | null> {
  const endpoint = `/v1/colors/${encodeURIComponent(did)}`;
  
  try {
    const response = await binding.fetch(`https://orbyt-api${endpoint}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    // Gracefully handle binding failures (e.g., local dev without service binding)
    console.warn('Color API unavailable:', error instanceof Error ? error.message : error);
    return null;
  }
}
