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
 * Get color data for a single DID
 * Uses Service Binding for direct Worker-to-Worker communication (no public internet)
 * Falls back to HTTP if binding unavailable (local dev)
 */
export async function getColor(
  did: string,
  binding?: OrbytApiBinding
): Promise<ColorData | null> {
  try {
    const endpoint = `/v1/colors/${encodeURIComponent(did)}`;
    
    let response: Response;
    
    if (binding) {
      // Service Binding: direct Worker-to-Worker call
      response = await binding.fetch(new Request(`https://internal${endpoint}`));
    } else {
      // Fallback for local dev
      response = await fetch(`https://api.getorbyt.com${endpoint}`);
    }
    
    if (response.status === 404) {
      return null;
    }
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch color data:', error);
    return null;
  }
}
