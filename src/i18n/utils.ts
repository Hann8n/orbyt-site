import { ui, defaultLang, showDefaultLang, locales } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && locales.includes(first as keyof typeof ui)) {
    return first as keyof typeof ui;
  }
  return defaultLang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key] || String(key);
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang): string {
    const pathWithLeadingSlash = path.startsWith('/') ? path : `/${path}`;
    const normalized = pathWithLeadingSlash.endsWith('/') && pathWithLeadingSlash !== '/' ? pathWithLeadingSlash : pathWithLeadingSlash;
    if (!showDefaultLang && l === defaultLang) {
      return normalized;
    }
    return `/${l}${normalized}`;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && locales.includes(first)) {
    const rest = segments.slice(1);
    return rest.length > 0 ? `/${rest.join('/')}` : '/';
  }
  return pathname || '/';
}
