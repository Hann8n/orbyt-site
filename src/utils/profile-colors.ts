/**
 * Mirrors `getProfileColors` chrome background in orbyt `src/utils/formatting/colors.ts`:
 * `chromeBackgroundColor` = blend(profileBg, ORBYT_BLACK, adaptiveBlend(L)).
 */
export const ORBYT_BLACK = '#05070a' as const;

function getRelativeLuminance(hex: string): number {
  const color = hex.replace('#', '');
  const r = parseInt(color.substring(0, 2), 16) / 255;
  const g = parseInt(color.substring(2, 4), 16) / 255;
  const b = parseInt(color.substring(4, 6), 16) / 255;
  const transform = (c: number): number =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
}

function blendColors(color1: string, color2: string, ratio: number): string {
  const r = Math.round(
    parseInt(color1.slice(1, 3), 16) * (1 - ratio) + parseInt(color2.slice(1, 3), 16) * ratio
  );
  const g = Math.round(
    parseInt(color1.slice(3, 5), 16) * (1 - ratio) + parseInt(color2.slice(3, 5), 16) * ratio
  );
  const b = Math.round(
    parseInt(color1.slice(5, 7), 16) * (1 - ratio) + parseInt(color2.slice(5, 7), 16) * ratio
  );
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/** Same as app `getAdaptiveChromeBlend` — luminance-scaled blend toward black. */
function getAdaptiveChromeBlend(hex: string): number {
  const L = getRelativeLuminance(hex);
  return 0.1 + 0.15 * (1 - L);
}

/** Deepest shell / feed chrome behind profile content (not pure #000). */
export function getChromeBackgroundColor(profileBackgroundColor: string): string {
  return blendColors(
    profileBackgroundColor,
    ORBYT_BLACK,
    getAdaptiveChromeBlend(profileBackgroundColor)
  );
}
