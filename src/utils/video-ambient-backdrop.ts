// Hash-seeded gradient + scrim values for video backdrops.
const VIDEO_AMBIENT_BACKDROP_GRADIENT_PAIRS = [
  ['#130436', '#06090d'],
  ['#091f47', '#110430'],
  ['#002c20', '#06090d'],
  ['#390420', '#110430'],
  ['#440915', '#110430'],
  ['#10131a', '#020305'],
  ['#392500', '#110430'],
  ['#481805', '#110430'],
  ['#002a32', '#081c3f'],
  ['#002a32', '#06090d'],
  ['#392500', '#06090d'],
  ['#091f47', '#00271c'],
  ['#130436', '#00271c'],
  ['#390420', '#3d0813'],
  ['#481805', '#020305'],
  ['#440915', '#06090d'],
  ['#002c20', '#110430'],
  ['#392500', '#401504'],
] as const;

const VIDEO_AMBIENT_BACKDROP_ANGLES = [155, 170, 185, 200, 215, 230] as const;
const VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_X = [14, 28, 42, 58, 72, 86] as const;
const VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_Y = [12, 20, 28, 36] as const;
const VIDEO_AMBIENT_BACKDROP_HIGHLIGHT_OPACITY = [0.05, 0.07, 0.09, 0.11] as const;
const VIDEO_AMBIENT_BACKDROP_SCRIM_OPACITY = [0.52, 0.56, 0.6, 0.64] as const;

export function hashVideoAmbientBackdropSeed(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getVideoAmbientBackdropGradientColors(
  seedUrl: string | null
): readonly [string, string] {
  const s = seedUrl ?? 'fallback';
  const index = hashVideoAmbientBackdropSeed(s) % VIDEO_AMBIENT_BACKDROP_GRADIENT_PAIRS.length;
  return VIDEO_AMBIENT_BACKDROP_GRADIENT_PAIRS[index];
}

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
