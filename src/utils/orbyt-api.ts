export interface ColorData {
  textColor: string;
  backgroundColor: string;
  joinedAt: string;
  isBeta: boolean;
}

export interface OrbytApiBinding {
  fetch(request: Request | string, init?: RequestInit): Promise<Response>;
}

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
    console.warn('Color API unavailable:', error instanceof Error ? error.message : error);
    return null;
  }
}
