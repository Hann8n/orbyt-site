import { defineMiddleware } from 'astro:middleware'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, isValidLocale } from './i18n/utils'

const LOCALE_COOKIE = 'orbyt-locale'

/**
 * Parses the `Accept-Language` header and returns the best-matching supported locale.
 * Tries an exact case-insensitive match first, then a base-language prefix match
 * (e.g. `de-AT` → `de`, `pt-PT` → `pt-BR`), then English variants, then defaults to `en`.
 */
function matchAcceptLanguage(header: string | null): string {
  if (!header) return DEFAULT_LOCALE

  const langs = header
    .split(',')
    .map((part) => {
      const [code, q] = part.trim().split(';q=')
      return { code: code.trim(), q: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { code } of langs) {
    const lower = code.toLowerCase()
    // Exact match (case-insensitive)
    const exact = (SUPPORTED_LOCALES as readonly string[]).find(
      (l) => l.toLowerCase() === lower
    )
    if (exact) return exact
    // Base language match: 'de-AT' → 'de', 'pt-PT' → 'pt-BR'
    const base = lower.split('-')[0]
    const prefix = (SUPPORTED_LOCALES as readonly string[]).find(
      (l) => l.toLowerCase().startsWith(base)
    )
    if (prefix) return prefix
    // English variants
    if (base === 'en') return DEFAULT_LOCALE
  }

  return DEFAULT_LOCALE
}

/**
 * Astro middleware that resolves the active locale for every request and stores
 * it in `context.locals.locale`. Also reads Cloudflare geo-IP (`cf.country` or
 * `CF-IPCountry` header) into `context.locals.countryCode` for geo-aware flag display.
 *
 * Detection order:
 * 1. `x-orbyt-locale` header set by an earlier internal rewrite (skips re-detection)
 * 2. URL path prefix — `/de/`, `/ja/`, etc. (rewrites internally, strips prefix)
 * 3. `orbyt-locale` cookie (persists user's manual language choice)
 * 4. `Accept-Language` header
 * 5. Default: `en`
 *
 * Non-English locales detected at the root path (`/`) are redirected to `/{locale}/`.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  // Read Cloudflare geo-IP country — available via the cf object in Workers,
  // or the CF-IPCountry header when running behind Cloudflare.
  const cf = context.request.cf
  const rawCountry = cf?.country ?? context.request.headers.get('CF-IPCountry')
  const normalizedCountry = rawCountry?.toUpperCase()
  context.locals.countryCode =
    normalizedCountry && /^[A-Z]{2}$/.test(normalizedCountry) && normalizedCountry !== 'XX' && normalizedCountry !== 'T1'
      ? normalizedCountry
      : undefined

  // If this is a rewritten request from a locale-prefix path, skip re-detection
  const preResolved = context.request.headers.get('x-orbyt-locale')
  if (preResolved && isValidLocale(preResolved)) {
    context.locals.locale = preResolved
    return next()
  }

  const { pathname } = new URL(context.request.url)
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]

  // If path starts with a supported locale prefix, consume it and rewrite internally
  if (first && (SUPPORTED_LOCALES as readonly string[]).includes(first)) {
    context.locals.locale = first
    const rest = segments.slice(1).join('/')
    const rewritePath = rest ? `/${rest}` : '/'
    const rewriteUrl = new URL(rewritePath, context.request.url)
    const headers = new Headers(context.request.headers)
    headers.set('x-orbyt-locale', first)
    return context.rewrite(new Request(rewriteUrl, { headers }))
  }

  // No locale prefix — detect from cookie then Accept-Language
  const cookieVal = context.cookies.get(LOCALE_COOKIE)?.value
  let locale: string

  if (cookieVal && isValidLocale(cookieVal)) {
    locale = cookieVal
  } else {
    locale = matchAcceptLanguage(context.request.headers.get('Accept-Language'))
  }

  // Redirect root to locale prefix when non-English is detected/preferred
  if (pathname === '/' && locale !== DEFAULT_LOCALE) {
    return context.redirect(`/${locale}/`, 302)
  }

  context.locals.locale = locale
  return next()
})
