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

export const SUPPORTED_LOCALES = ['de', 'es-ES', 'es-419', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'tr'] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'en'

/** Geo-detected only — not shown in the language switcher. */
export const GEO_ONLY_LOCALES = ['es-MX'] as const

export const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
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
  'es-ES': 'ES',
  'es-419': 'ES',
  fr: 'FR',
  it: 'IT',
  ja: 'JA',
  ko: 'KO',
  'pt-BR': 'PT',
  tr: 'TR',
}

export const LOCALE_FLAG_COUNTRY: Record<string, string> = {
  en: 'us',
  de: 'de',
  'es-ES': 'es',
  'es-419': 'ar',
  fr: 'fr',
  it: 'it',
  ja: 'jp',
  ko: 'kr',
  'pt-BR': 'br',
  tr: 'tr',
}

export const LOCALE_GEO_FLAGS: Record<string, Record<string, string>> = {
  en: {
    GB: 'gb', IE: 'ie', CA: 'ca',
    JM: 'jm', TT: 'tt', BB: 'bb', BS: 'bs', BZ: 'bz', GY: 'gy',
    AU: 'au', NZ: 'nz', FJ: 'fj', PG: 'pg', SB: 'sb', VU: 'vu',
    WS: 'ws', TO: 'to', KI: 'ki', NR: 'nr',
    SG: 'sg', PH: 'ph', MY: 'my', HK: 'hk', IN: 'in',
    PK: 'pk', BD: 'bd', LK: 'lk',
    ZA: 'za', NG: 'ng', GH: 'gh', KE: 'ke', ET: 'et', TZ: 'tz',
    UG: 'ug', ZW: 'zw', ZM: 'zm', RW: 'rw', CM: 'cm', SL: 'sl',
    LR: 'lr', GM: 'gm', BW: 'bw', NA: 'na', LS: 'ls', SZ: 'sz',
    MW: 'mw', SC: 'sc', MU: 'mu', MT: 'mt', CY: 'cy',
  },
  de: {
    AT: 'at', CH: 'ch', LI: 'li', BE: 'be', LU: 'lu',
  },
  'es-419': {
    MX: 'mx', CO: 'co', AR: 'ar', CL: 'cl', PE: 'pe',
    VE: 've', EC: 'ec', GT: 'gt', CU: 'cu', BO: 'bo',
    DO: 'do', HN: 'hn', PY: 'py', SV: 'sv', NI: 'ni',
    CR: 'cr', PA: 'pa', UY: 'uy', PR: 'pr', GQ: 'gq',
  },
  fr: {
    BE: 'be', CH: 'ch', LU: 'lu', MC: 'mc', CA: 'ca', HT: 'ht',
    SN: 'sn', CI: 'ci', ML: 'ml', BF: 'bf', NE: 'ne', GN: 'gn',
    TG: 'tg', BJ: 'bj', CM: 'cm', CD: 'cd', CG: 'cg', CF: 'cf',
    GA: 'ga', TD: 'td', GQ: 'gq', BI: 'bi', RW: 'rw',
    MG: 'mg', MU: 'mu', SC: 'sc', KM: 'km', DJ: 'dj',
    MA: 'ma', DZ: 'dz', TN: 'tn', MR: 'mr', VU: 'vu',
  },
  it: {
    CH: 'ch', SM: 'sm',
  },
  'pt-BR': {
    PT: 'pt', AO: 'ao', MZ: 'mz', CV: 'cv',
    GW: 'gw', ST: 'st', TL: 'tl', MO: 'mo',
  },
  tr: {
    CY: 'cy', AZ: 'az',
  },
}

export function getFlagCountryCode(locale: string, countryCode?: string): string {
  if (countryCode) {
    const geoFlag = LOCALE_GEO_FLAGS[locale]?.[countryCode]
    if (geoFlag) return geoFlag
  }
  return LOCALE_FLAG_COUNTRY[locale] ?? 'us'
}

export const LOCALE_FLAGS: Record<string, string> = {
  en: '🇺🇸',
  de: '🇩🇪',
  'es-ES': '🇪🇸',
  'es-419': '🇦🇷',
  fr: '🇫🇷',
  it: '🇮🇹',
  ja: '🇯🇵',
  ko: '🇰🇷',
  'pt-BR': '🇧🇷',
  tr: '🇹🇷',
}

export const FALLBACKS: Partial<Record<string, string>> = {
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

export function isValidLocale(locale: string): boolean {
  return locale === DEFAULT_LOCALE
    || (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    || (GEO_ONLY_LOCALES as readonly string[]).includes(locale)
}

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

export function localeToHtmlLang(locale: string): string {
  return locale
}

export function getLocaleUrl(locale: string, path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) return normalizedPath
  return `/${locale}${normalizedPath === '/' ? '/' : normalizedPath}`
}

export function hreflangLinks(canonicalPath: string): Array<{ hreflang: string; href: string }> {
  const base = 'https://getorbyt.com'
  const links = [
    { hreflang: 'x-default', href: `${base}${canonicalPath}` },
    { hreflang: 'en', href: `${base}${canonicalPath}` },
  ]
  for (const locale of SUPPORTED_LOCALES) {
    const path = `/${locale}${canonicalPath === '/' ? '/' : canonicalPath}`
    links.push({ hreflang: locale, href: `${base}${path}` })
  }
  return links
}
