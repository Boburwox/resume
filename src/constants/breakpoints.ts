export const breakpoints = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

export type BreakpointName = keyof typeof breakpoints;
