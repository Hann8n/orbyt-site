export interface AppVersion {
  version: string;
  buildVersion: string;
  date: string;
  localizedDescription?: string;
  downloadURL: string;
  size: number;
  minOSVersion?: string;
}

export interface AltStoreSource {
  name: string;
  subtitle: string;
  description: string;
  iconURL: string;
  headerURL: string;
  website: string;
  tintColor: string;
  fediUsername: string;
  featuredApps: string[];
  apps: Array<{
    name: string;
    bundleIdentifier: string;
    marketplaceID: string;
    developerName: string;
    subtitle: string;
    localizedDescription: string;
    iconURL: string;
    tintColor: string;
    category: string;
    screenshots: unknown[];
    versions: AppVersion[];
    appPermissions: {
      privacy: Record<string, string>;
    };
  }>;
  news: unknown[];
}

export const SOURCE_KEY = 'altstore-source.json';
export const DEFAULT_DOWNLOAD_URL = 'https://downloads.getorbyt.com/manifest.json';
export const DEFAULT_MIN_OS = '16.4';

export const BASE_SOURCE: AltStoreSource = {
  name: 'Orbyt',
  subtitle: 'Video app for Bluesky',
  description:
    'Orbyt is a video-first social app for the Bluesky network, built on the AT Protocol. Available for EU and Japan via AltStore PAL.',
  iconURL: 'https://getorbyt.com/altstore/orbyt-icon.png',
  headerURL: 'https://getorbyt.com/images/orbyt-logotype.png',
  website: 'https://getorbyt.com',
  tintColor: '#9B59B6',
  fediUsername: 'orbyt',
  featuredApps: ['com.getorbyt.app'],
  apps: [
    {
      name: 'Orbyt',
      bundleIdentifier: 'com.getorbyt.app',
      marketplaceID: '6751679299',
      developerName: 'Orbyt',
      subtitle: 'Video app for Bluesky',
      localizedDescription:
        'Orbyt is a video-first social app for the Bluesky network.\n\n• Browse video feeds from Bluesky\n• Create and share short-form videos\n• Connect with the AT Protocol community\n• Built with React Native and Expo',
      iconURL: 'https://getorbyt.com/altstore/orbyt-icon.png',
      tintColor: '#9B59B6',
      category: 'social',
      screenshots: [],
      versions: [
        {
          version: '1.1.2',
          buildVersion: '62',
          date: '2026-03-12',
          localizedDescription: 'Latest release.',
          downloadURL: DEFAULT_DOWNLOAD_URL,
          size: 70307293,
          minOSVersion: DEFAULT_MIN_OS,
        },
      ],
      appPermissions: {
        privacy: {
          NSCameraUsageDescription:
            'We need camera access to record videos for posts and take profile photos.',
          NSMicrophoneUsageDescription:
            'We need microphone access to record audio with your videos.',
          NSPhotoLibraryUsageDescription:
            'We need access to your photo library to select videos for posts and photos for your profile.',
          NSPhotoLibraryAddUsageDescription:
            'We need permission to save your videos to the camera roll.',
        },
      },
    },
  ],
  news: [],
};

export async function readSource(bucket: R2Bucket): Promise<AltStoreSource> {
  try {
    const obj = await bucket.get(SOURCE_KEY);
    if (obj) {
      const text = await obj.text();
      return JSON.parse(text) as AltStoreSource;
    }
  } catch {
    // Fall through to base source
  }
  return structuredClone(BASE_SOURCE);
}

export async function writeSource(bucket: R2Bucket, source: AltStoreSource): Promise<void> {
  await bucket.put(SOURCE_KEY, JSON.stringify(source, null, 2), {
    httpMetadata: { contentType: 'application/json' },
  });
}

export function checkBearerAuth(request: Request, secret: string): boolean {
  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Bearer ')) return false;
  return auth.slice(7) === secret;
}
