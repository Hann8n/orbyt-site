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
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error('Failed to fetch color data:', error);
    throw error; // Re-throw so we can see the actual error
  }
}
