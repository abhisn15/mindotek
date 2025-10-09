export const PALETTE = {
  primary: '#134686',
  accent: '#ED3F27',
  highlight: '#FEB21A',
  background: '#FDF4E3',
  text: '#1F2933',
  muted: '#3A4A63',
  surface: '#FFFFFF',
} as const;

export type PaletteKey = keyof typeof PALETTE;
