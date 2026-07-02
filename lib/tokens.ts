/**
 * Design tokens — single source of truth shared between CSS (@theme)
 * and any TS/TSX that needs to reference brand colors or typography
 * without duplicating hex codes.
 *
 * If you change a value here, mirror it in `app/globals.css` @theme.
 */

export const colors = {
  bg: {
    primary: '#050505',
    secondary: '#0F1115',
  },
  accent: {
    DEFAULT: '#FF5C00',
    secondary: '#FF8A1D',
    highlight: '#FFD66B',
    deep: '#FF2E00',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#8A8A8A',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

export const fonts = {
  sans: 'var(--font-inter), system-ui, sans-serif',
  display: 'var(--font-outfit), system-ui, sans-serif',
  mono: "'JetBrains Mono', ui-monospace, monospace",
} as const;

export const motion = {
  ease: {
    /** iOS-style out-back: overshoots slightly then settles */
    outBack: [0.16, 1, 0.3, 1] as const,
    /** Snappy UI */
    out: [0.25, 1, 0.5, 1] as const,
    /** Loader / page-level panel slides */
    panel: [0.76, 0, 0.24, 1] as const,
  },
  duration: {
    fast: 0.25,
    base: 0.55,
    slow: 1.1,
  },
} as const;

export const social = {
  email: 'contact.makhdum@gmail.com',
  phone: '+8801903458910',
  github: 'https://github.com/cyphex-0',
  linkedin: 'https://www.linkedin.com/in/shahmakhdum/',
  whatsapp: 'https://wa.me/8801903458910',
} as const;

export type Colors = typeof colors;
export type Fonts = typeof fonts;
