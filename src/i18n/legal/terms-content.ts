import { marked } from 'marked'
import { FALLBACKS } from '../utils'
import termsEn from './en/terms.md?raw'
import termsContent_de from './de/terms.md?raw'
import termsContent_es_419 from './es-419/terms.md?raw'
import termsContent_es_ES from './es-ES/terms.md?raw'
import termsContent_fr from './fr/terms.md?raw'
import termsContent_it from './it/terms.md?raw'
import termsContent_ja from './ja/terms.md?raw'
import termsContent_ko from './ko/terms.md?raw'
import termsContent_pt_BR from './pt-BR/terms.md?raw'
import termsContent_tr from './tr/terms.md?raw'

type LocaleKey = 'en' | 'de' | 'es-ES' | 'es-419' | 'fr' | 'it' | 'ja' | 'ko' | 'pt-BR' | 'tr'

const termsContent: Record<LocaleKey, string> = {
  en: termsEn,
  de: termsContent_de,

  'es-419': termsContent_es_419,

  'es-ES': termsContent_es_ES,

  fr: termsContent_fr,

  it: termsContent_it,

  ja: termsContent_ja,

  ko: termsContent_ko,

  'pt-BR': termsContent_pt_BR,

  tr: termsContent_tr,
}

export function getTermsContent(locale: string): string {
  const key = (FALLBACKS[locale] ?? locale) as LocaleKey
  return marked.parse(termsContent[key] ?? termsContent.en) as string
}
