export const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  wide: 1920,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const mediaQueries = {
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  wide: `(min-width: ${breakpoints.wide}px)`,
} as const;

export const duration = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
} as const;

export type Duration = keyof typeof duration;

export const easing = {
  standard: [0.4, 0, 0.2, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  emphasized: [0.16, 1, 0.3, 1],
} as const;

export type Easing = keyof typeof easing;

export const spring = {
  default: { type: "spring", stiffness: 260, damping: 24, mass: 1 },
  soft: { type: "spring", stiffness: 180, damping: 22, mass: 1 },
  snappy: { type: "spring", stiffness: 340, damping: 28, mass: 0.9 },
  bouncy: { type: "spring", stiffness: 400, damping: 17, mass: 1 },
} as const;

export type SpringKey = keyof typeof spring;

export const hoverScale = {
  default: 1.02,
  card: 1.015,
  button: 1.03,
  active: 0.98,
} as const;

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: duration.slow, ease: easing.emphasized },
} as const;

export const cardHoverTransition = {
  scale: hoverScale.card,
  transition: { duration: duration.normal, ease: easing.emphasized },
} as const;

export const buttonHoverTransition = {
  scale: hoverScale.button,
  transition: { duration: duration.fast, ease: easing.out },
} as const;

export const spacing = {
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  32: "2rem",
  40: "2.5rem",
  48: "3rem",
  64: "4rem",
  80: "5rem",
  96: "6rem",
  128: "8rem",
} as const;

export type SpacingKey = keyof typeof spacing;

export const radius = {
  sm: "0.375rem",
  md: "0.625rem",
  lg: "0.875rem",
  xl: "1.25rem",
  "2xl": "1.75rem",
  full: "9999px",
} as const;

export type RadiusKey = keyof typeof radius;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const typeScale = {
  hero: { size: "5rem", lineHeight: 1.1, tracking: "-0.04em", weight: fontWeight.bold },
  h1: { size: "3.5rem", lineHeight: 1.1, tracking: "-0.02em", weight: fontWeight.bold },
  h2: { size: "2.5rem", lineHeight: 1.15, tracking: "-0.02em", weight: fontWeight.semibold },
  h3: { size: "1.875rem", lineHeight: 1.2, tracking: "-0.02em", weight: fontWeight.semibold },
  h4: { size: "1.5rem", lineHeight: 1.3, tracking: "-0.01em", weight: fontWeight.semibold },
  bodyLarge: { size: "1.125rem", lineHeight: 1.5, tracking: "0em", weight: fontWeight.regular },
  body: { size: "1rem", lineHeight: 1.5, tracking: "0em", weight: fontWeight.regular },
  caption: { size: "0.8125rem", lineHeight: 1.3, tracking: "0.02em", weight: fontWeight.medium },
} as const;

export type TypeScaleKey = keyof typeof typeScale;

export const theme = {
  breakpoints,
  mediaQueries,
  duration,
  easing,
  spring,
  hoverScale,
  pageTransition,
  cardHoverTransition,
  buttonHoverTransition,
  spacing,
  radius,
  fontWeight,
  typeScale,
} as const;

export type Theme = typeof theme;

export const THEME_STORAGE_KEY = "portfolio-theme";

export default theme;
