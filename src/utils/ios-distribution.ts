/**
 * Cloudflare sets `cf-ipcountry` to an ISO 3166-1 alpha-2 code (e.g. "DE", "JP").
 * See: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-ipcountry
 */

/** EU member states (27) — regions where AltStore PAL / alternative distribution applies per project docs. */
const EU_MEMBER_CODES = new Set([
	'AT',
	'BE',
	'BG',
	'HR',
	'CY',
	'CZ',
	'DK',
	'EE',
	'FI',
	'FR',
	'DE',
	'GR',
	'HU',
	'IE',
	'IT',
	'LV',
	'LT',
	'LU',
	'MT',
	'NL',
	'PL',
	'PT',
	'RO',
	'SK',
	'SI',
	'ES',
	'SE',
]);

/** Uppercases and validates a raw CF-IPCountry value; returns `null` for unknown/Tor (`XX`, `T1`) and malformed codes. */
function normalizeCountryCode(value: string | null | undefined): string | null {
	if (value == null || value === '') return null;
	const code = value.trim().toUpperCase();
	if (code === 'XX' || code === 'T1' || code.length !== 2) return null;
	return code;
}

/** Returns `true` for EU member states and Japan, where AltStore PAL is the primary iOS distribution channel. */
function isAltstorePalRegion(cfIpCountry: string | null | undefined): boolean {
	const code = normalizeCountryCode(cfIpCountry);
	if (code == null) return false;
	return code === 'JP' || EU_MEMBER_CODES.has(code);
}

export type IosDownloadPrimary = 'altstore' | 'appstore';

export type IosDownloadOptions = Readonly<{
	primary: IosDownloadPrimary;
	altstoreSourceUrl: string;
	appStoreUrl: string;
}>;

const DEFAULT_ALTSTORE_SOURCE = 'https://api.getorbyt.com/v1/altstore/source.json';
/** Same marketplace ID as the canonical source served at `/altstore/source.json` */
const DEFAULT_APP_STORE = 'https://apps.apple.com/app/id6751679299';

/** Builds iOS download options based on the visitor's country; AltStore PAL is primary for EU and Japan. */
export function getIosDownloadOptions(
	cfIpCountry: string | null | undefined,
	overrides?: Partial<Pick<IosDownloadOptions, 'altstoreSourceUrl' | 'appStoreUrl'>>,
): IosDownloadOptions {
	const altstoreSourceUrl = overrides?.altstoreSourceUrl ?? DEFAULT_ALTSTORE_SOURCE;
	const appStoreUrl = overrides?.appStoreUrl ?? DEFAULT_APP_STORE;
	const useAltstoreFirst = isAltstorePalRegion(cfIpCountry);
	return {
		primary: useAltstoreFirst ? 'altstore' : 'appstore',
		altstoreSourceUrl,
		appStoreUrl,
	};
}

/** Reads `cf-ipcountry` from the incoming request headers and delegates to `getIosDownloadOptions`. */
export function getIosDownloadOptionsFromRequest(
	request: Request,
	overrides?: Partial<Pick<IosDownloadOptions, 'altstoreSourceUrl' | 'appStoreUrl'>>,
): IosDownloadOptions {
	return getIosDownloadOptions(request.headers.get('cf-ipcountry'), overrides);
}

/**
 * AltStore PAL (EU / Japan App Store build) registers `altstore-pal://`.
 * Classic sideload AltStore uses `altstore://`; this site targets PAL for primary iOS distribution.
 */
function altstorePalSourceDeepLink(sourceUrl: string): string {
	return `altstore-pal://source?url=${encodeURIComponent(sourceUrl)}`;
}

/** Resolves the primary iOS download href from pre-built options (AltStore deep link or App Store URL). */
function iosHrefForOptions(options: IosDownloadOptions): string {
	return options.primary === 'altstore'
		? altstorePalSourceDeepLink(options.altstoreSourceUrl)
		: options.appStoreUrl;
}

/** Resolved `href` from options (same rules as `iosDownloadHrefFromRequest`). */
export function iosDownloadHrefFromOptions(options: IosDownloadOptions): string {
	return iosHrefForOptions(options);
}

/** Resolved `href` for the primary iOS CTA (AltStore deep link vs App Store). */
export function iosDownloadHrefFromRequest(
	request: Request,
	overrides?: Partial<Pick<IosDownloadOptions, 'altstoreSourceUrl' | 'appStoreUrl'>>,
): string {
	return iosHrefForOptions(getIosDownloadOptionsFromRequest(request, overrides));
}
