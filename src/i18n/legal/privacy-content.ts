import { marked } from 'marked'
import { FALLBACKS } from '../utils'
import privacyEn from './en/privacy.md?raw'
import privacyContent_de from './de/privacy.md?raw'
import privacyContent_es_419 from './es-419/privacy.md?raw'
import privacyContent_es_ES from './es-ES/privacy.md?raw'
import privacyContent_fr from './fr/privacy.md?raw'
import privacyContent_it from './it/privacy.md?raw'
import privacyContent_ja from './ja/privacy.md?raw'
import privacyContent_ko from './ko/privacy.md?raw'
import privacyContent_pt_BR from './pt-BR/privacy.md?raw'
import privacyContent_tr from './tr/privacy.md?raw'

type LocaleKey = 'en' | 'de' | 'es-ES' | 'es-419' | 'fr' | 'it' | 'ja' | 'ko' | 'pt-BR' | 'tr'

const privacyContent: Record<LocaleKey, string> = {
  en: privacyEn,
  de: privacyContent_de,

  'es-419': privacyContent_es_419,

  'es-ES': privacyContent_es_ES,

  fr: privacyContent_fr,

  it: privacyContent_it,

  ja: privacyContent_ja,

  ko: privacyContent_ko,

  'pt-BR': privacyContent_pt_BR,

  tr: privacyContent_tr,
}

export function getPrivacyContent(locale: string): string {
  const key = (FALLBACKS[locale] ?? locale) as LocaleKey
  return marked.parse(privacyContent[key] ?? privacyContent.en) as string
}
