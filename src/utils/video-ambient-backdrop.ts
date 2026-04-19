// Hash-seeded gradient values for video backdrops using oklch.
// Golden angle maximizes hue separation across consecutive hashes.
const GOLDEN_ANGLE = 137.50776;

/** Formats an oklch color triple as a CSS `oklch(...)` string. */
function oklchToCss(l: number, c: number, h: number): string {
  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(2)})`;
}

/** Wraps an arbitrary hue value into the [0, 360) range. */
function normalizeHue(value: number): number {
  const hue = value % 360;
  return hue < 0 ? hue + 360 : hue;
}

/**
 * Derives a deterministic pair of dark oklch colors from a seed URL.
 * Primary and secondary hues are separated by ~150–210° so the gradient
 * reads as two distinct tones without clashing.
 */
function getVideoAmbientBackdropGradientColors(seedUrl: string | null): readonly [string, string] {
  const seed = seedUrl ?? 'fallback';

  const baseHue = normalizeHue((hashVideoAmbientBackdropSeed(`${seed}:h`) * GOLDEN_ANGLE) % 360);

  const secondHueOffset = 150 + (hashVideoAmbientBackdropSeed(`${seed}:h2`) % 61);
  const secondHue = normalizeHue(baseHue + secondHueOffset);

  const lightPrimary = 0.16 + (hashVideoAmbientBackdropSeed(`${seed}:l1`) % 6) * 0.01;
  const lightSecondary = 0.1 + (hashVideoAmbientBackdropSeed(`${seed}:l2`) % 5) * 0.01;
  const chromaPrimary = 0.04 + (hashVideoAmbientBackdropSeed(`${seed}:c1`) % 4) * 0.01;
  const chromaSecondary = 0.02 + (hashVideoAmbientBackdropSeed(`${seed}:c2`) % 3) * 0.01;

  return [
    oklchToCss(lightPrimary, chromaPrimary, baseHue),
    oklchToCss(lightSecondary, chromaSecondary, secondHue),
  ];
}

const VIDEO_AMBIENT_BACKDROP_ANGLES = [155, 170, 185, 200, 215, 230] as const;
const VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_X = [14, 28, 42, 58, 72, 86] as const;
const VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_Y = [12, 20, 28, 36] as const;
const VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_OPACITY = [0.07, 0.09, 0.11, 0.13] as const;
const VIDEO_AMBIENT_BACKDROP_SCRIM_OPACITY = [0.42, 0.46, 0.5, 0.54] as const;

/**
 * Fast, non-cryptographic djb2-style hash for a string seed.
 * Used to pick deterministic but visually varied backdrop parameters
 * without any runtime randomness that would break SSR/hydration parity.
 */
export function hashVideoAmbientBackdropSeed(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Builds a complete CSS inline style string for the video ambient backdrop element.
 * All CSS custom properties (`--video-ambient-backdrop-*`) are derived from `seedUrl`
 * so the same thumbnail URL always produces the same gradient, angle, and highlight.
 */
export function getVideoAmbientBackdropInlineStyle(seedUrl: string | null): string {
  const seed = seedUrl ?? 'fallback';
  const [start, end] = getVideoAmbientBackdropGradientColors(seed);
  const angle = VIDEO_AMBIENT_BACKDROP_ANGLES[
    hashVideoAmbientBackdropSeed(`${seed}:angle`) % VIDEO_AMBIENT_BACKDROP_ANGLES.length
  ];
  const highlightX = VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_X[
    hashVideoAmbientBackdropSeed(`${seed}:hx`) % VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_X.length
  ];
  const highlightY = VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_Y[
    hashVideoAmbientBackdropSeed(`${seed}:hy`) % VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_Y.length
  ];
  const highlightOpacity = VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_OPACITY[
    hashVideoAmbientBackdropSeed(`${seed}:ho`) % VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_OPACITY.length
  ];
  const scrimOpacity = VIDEO_AMBIENT_BACKDROP_SCRIM_OPACITY[
    hashVideoAmbientBackdropSeed(`${seed}:so`) % VIDEO_AMBIENT_BACKDROP_SCRIM_OPACITY.length
  ];

  return [
    `--video-ambient-backdrop-start: ${start}`,
    `--video-ambient-backdrop-end: ${end}`,
    `--video-ambient-backdrop-angle: ${angle}deg`,
    `--video-ambient-backdrop-highlight-x: ${highlightX}%`,
    `--video-ambient-backdrop-highlight-y: ${highlightY}%`,
    `--video-ambient-backdrop-highlight-opacity: ${highlightOpacity}`,
    `--video-ambient-backdrop-scrim-opacity: ${scrimOpacity}`,
  ].join('; ');
}
