export const COLORS = {
  ink: '#080C14',
  inkSoft: '#0F1520',
  paper: '#FDFBF7',
  cream: '#F5F2EC',
  text: '#E8E8F0',
  textInk: '#1A1714',
  textDim: 'rgba(232,232,240,0.55)',
  textFaint: 'rgba(232,232,240,0.25)',
  line: 'rgba(232,232,240,0.08)',
  lineLight: '#E2DDD7',
  brand: '#7B9FFF',
  knowledge: '#7B9FFF',
  possession: '#FFB347',
  dialogue: '#FF7F9E',
  change: '#A78BFA',
  memory: '#34D399',
  contagion: '#F472B6',
  contribution: '#FBBF24',
  error: '#FF6B6B',
  success: '#34D399',
} as const

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 80,
} as const

export const FONTS = {
  serif: "'Georgia', 'Noto Serif JP', serif",
  sans: "'Hiragino Sans', 'Noto Sans JP', system-ui, sans-serif",
  mono: "'Courier New', 'JetBrains Mono', monospace",
} as const

export const ANIMATION = {
  durationMicro: 120,
  durationStandard: 280,
  durationExpressive: 480,
  staggerDelay: 60,
  easing: {
    easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
    easeIn: 'cubic-bezier(0.55, 0, 1, 0.45)',
  },
} as const
