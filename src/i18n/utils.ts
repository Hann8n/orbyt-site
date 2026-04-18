import en from './translations/en.json'
import de from './translations/de.json'
import esMX from './translations/es-MX.json'
import fr from './translations/fr.json'
import ja from './translations/ja.json'
import ko from './translations/ko.json'
import ptBR from './translations/pt-BR.json'
import es419 from './translations/es-419.json'

export const DEFAULT_LOCALE = 'en'

export const SUPPORTED_LOCALES = ['de', 'es-MX', 'fr', 'ja', 'ko', 'pt-BR', 'es-419'] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'en'

export const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  'es-MX': 'Español (MX)',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어',
  'pt-BR': 'Português',
  'es-419': 'Español (LA)',
}

const FALLBACKS: Partial<Record<string, string>> = {
  'es-419': 'es-MX',
}

const translations: Record<string, Record<string, string>> = {
  en,
  de,
  'es-MX': esMX,
  fr,
  ja,
  ko,
  'pt-BR': ptBR,
  'es-419': es419,
}

export function isValidLocale(locale: string): boolean {
  return locale === DEFAULT_LOCALE || (SUPPORTED_LOCALES as readonly string[]).includes(locale)
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
    const bcp47 = locale
    const path = `/${locale}${canonicalPath === '/' ? '/' : canonicalPath}`
    links.push({ hreflang: bcp47, href: `${base}${path}` })
  }
  return links
}
