import en from './translations/en.json'
import de from './translations/de.json'
import esMX from './translations/es-MX.json'
import esES from './translations/es-ES.json'
import es419 from './translations/es-419.json'
import fr from './translations/fr.json'
import it from './translations/it.json'
import ja from './translations/ja.json'
import ko from './translations/ko.json'
import ptBR from './translations/pt-BR.json'
import tr from './translations/tr.json'

export const DEFAULT_LOCALE = 'en'

export const SUPPORTED_LOCALES = ['de', 'es-MX', 'es-ES', 'es-419', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'tr'] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'en'

export const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  'es-MX': 'Español (MX)',
  'es-ES': 'Español (ES)',
  'es-419': 'Español (LA)',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  'pt-BR': 'Português',
  tr: 'Türkçe',
}

export const LOCALE_CODES: Record<string, string> = {
  en: 'EN',
  de: 'DE',
  'es-MX': 'ES',
  'es-ES': 'ES',
  'es-419': 'ES',
  fr: 'FR',
  it: 'IT',
  ja: 'JA',
  ko: 'KO',
  'pt-BR': 'PT',
  tr: 'TR',
}

/** ISO 3166-1 alpha-2 country code for the default flag SVG per locale */
export const LOCALE_FLAG_COUNTRY: Record<string, string> = {
  en: 'us',
  de: 'de',
  'es-MX': 'mx',
  'es-ES': 'es',
  'es-419': 'ar',
  fr: 'fr',
  it: 'it',
  ja: 'jp',
  ko: 'kr',
  'pt-BR': 'br',
  tr: 'tr',
}

/**
 * Per-locale map of Cloudflare country code → flag SVG filename stem.
 * Lets every locale show the visitor's own country flag rather than a
 * single representative flag for the entire language region.
 */
export const LOCALE_GEO_FLAGS: Record<string, Record<string, string>> = {
  en: {
    // British Isles
    GB: 'gb', IE: 'ie',
    // North America
    CA: 'ca',
    // Caribbean & Central America
    JM: 'jm', TT: 'tt', BB: 'bb', BS: 'bs', BZ: 'bz', GY: 'gy',
    // Oceania
    AU: 'au', NZ: 'nz', FJ: 'fj', PG: 'pg', SB: 'sb', VU: 'vu',
    WS: 'ws', TO: 'to', KI: 'ki', NR: 'nr',
    // Asia-Pacific
    SG: 'sg', PH: 'ph', MY: 'my', HK: 'hk', IN: 'in',
    PK: 'pk', BD: 'bd', LK: 'lk',
    // Africa
    ZA: 'za', NG: 'ng', GH: 'gh', KE: 'ke', ET: 'et', TZ: 'tz',
    UG: 'ug', ZW: 'zw', ZM: 'zm', RW: 'rw', CM: 'cm', SL: 'sl',
    LR: 'lr', GM: 'gm', BW: 'bw', NA: 'na', LS: 'ls', SZ: 'sz',
    MW: 'mw', SC: 'sc', MU: 'mu',
    // Europe
    MT: 'mt', CY: 'cy',
  },
  de: {
    AT: 'at', CH: 'ch', LI: 'li',
    // German-speaking communities in Belgium and Luxembourg
    BE: 'be', LU: 'lu',
  },
  'es-MX': {
    // Mexico is the default; include other countries whose speakers
    // might pick es-MX over es-419
    MX: 'mx',
  },
  'es-419': {
    // Every Spanish-speaking country in Latin America sees their own flag
    MX: 'mx', CO: 'co', AR: 'ar', CL: 'cl', PE: 'pe',
    VE: 've', EC: 'ec', GT: 'gt', CU: 'cu', BO: 'bo',
    DO: 'do', HN: 'hn', PY: 'py', SV: 'sv', NI: 'ni',
    CR: 'cr', PA: 'pa', UY: 'uy', PR: 'pr',
    // Equatorial Guinea (Spanish is official)
    GQ: 'gq',
  },
  fr: {
    // Europe
    BE: 'be', CH: 'ch', LU: 'lu', MC: 'mc',
    // North America
    CA: 'ca',
    // Caribbean
    HT: 'ht',
    // West Africa
    SN: 'sn', CI: 'ci', ML: 'ml', BF: 'bf', NE: 'ne', GN: 'gn',
    TG: 'tg', BJ: 'bj',
    // Central Africa
    CM: 'cm', CD: 'cd', CG: 'cg', CF: 'cf', GA: 'ga', TD: 'td',
    GQ: 'gq', BI: 'bi', RW: 'rw',
    // East Africa & Indian Ocean
    MG: 'mg', MU: 'mu', SC: 'sc', KM: 'km', DJ: 'dj',
    // North Africa
    MA: 'ma', DZ: 'dz', TN: 'tn', MR: 'mr',
    // Pacific
    VU: 'vu',
  },
  it: {
    // Italian-speaking Switzerland (Ticino) and San Marino
    CH: 'ch', SM: 'sm',
  },
  'pt-BR': {
    PT: 'pt', AO: 'ao', MZ: 'mz', CV: 'cv',
    GW: 'gw', ST: 'st', TL: 'tl', MO: 'mo',
  },
  tr: {
    // Northern Cyprus and Azerbaijan (closely related Turkic language)
    CY: 'cy', AZ: 'az',
  },
}

/** Returns the SVG filename stem (e.g. "gb") for the flag to display. */
export function getFlagCountryCode(locale: string, countryCode?: string): string {
  if (countryCode) {
    const geoFlag = LOCALE_GEO_FLAGS[locale]?.[countryCode]
    if (geoFlag) return geoFlag
  }
  return LOCALE_FLAG_COUNTRY[locale] ?? 'us'
}

// Emoji flags kept for any non-switcher uses (e.g. schema markup)
export const LOCALE_FLAGS: Record<string, string> = {
  en: '🇺🇸',
  de: '🇩🇪',
  'es-MX': '🇲🇽',
  'es-ES': '🇪🇸',
  'es-419': '🇦🇷',
  fr: '🇫🇷',
  it: '🇮🇹',
  ja: '🇯🇵',
  ko: '🇰🇷',
  'pt-BR': '🇧🇷',
  tr: '🇹🇷',
}

/**
 * Fallback chain for partial-translation locales.
 * es-MX overrides a handful of Mexican-specific terms on top of the
 * complete neutral Latin American base (es-419).
 */
const FALLBACKS: Partial<Record<string, string>> = {
  'es-MX': 'es-419',
}

const translations: Record<string, Record<string, string>> = {
  en,
  de,
  'es-MX': esMX,
  'es-ES': esES,
  'es-419': es419,
  fr,
  it,
  ja,
  ko,
  'pt-BR': ptBR,
  tr,
}

/** Returns `true` if `locale` is `"en"` or one of the supported non-default locales. */
export function isValidLocale(locale: string): boolean {
  return locale === DEFAULT_LOCALE || (SUPPORTED_LOCALES as readonly string[]).includes(locale)
}

/**
 * Returns a `t(key)` function scoped to `locale`.
 * Lookup order: locale dict → fallback locale dict (e.g. es-MX → es-419) → English → key itself.
 */
export function useTranslations(locale: string) {
  const dict = translations[locale] ?? {}
  const fallback = FALLBACKS[locale]
  const fallbackDict = fallback ? (translations[fallback] ?? {}) : {}

  return function t(key: string): string {
    return (dict as Record<string, string>)[key]
      ?? (fallbackDict as Record<string, string>)[key]
      ?? en[key as keyof typeof en]
      ?? key
  }
}

/** Maps a locale string to the value for the HTML `lang` attribute (currently 1:1). */
export function localeToHtmlLang(locale: string): string {
  return locale
}

/** Constructs a locale-prefixed URL path; English returns the bare path (no `/en/` prefix). */
export function getLocaleUrl(locale: string, path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) return normalizedPath
  return `/${locale}${normalizedPath === '/' ? '/' : normalizedPath}`
}

/**
 * Generates `<link rel="alternate" hreflang>` objects for a canonical path.
 * Includes `x-default` and `en` pointing to the un-prefixed URL, plus one
 * entry per supported locale at `/{locale}{canonicalPath}`.
 */
export function hreflangLinks(canonicalPath: string): Array<{ hreflang: string; href: string }> {
  const base = 'https://getorbyt.com'
  const links = [
    { hreflang: 'x-default', href: `${base}${canonicalPath}` },
    { hreflang: 'en', href: `${base}${canonicalPath}` },
  ]
  for (const locale of SUPPORTED_LOCALES) {
    const bcp47 = locale
    const path = `/${locale}${canonicalPath === '/' ? '/' : canonicalPath}`
    links.push({ hreflang: bcp47, href: `${base}${path}` })
  }
  return links
}
