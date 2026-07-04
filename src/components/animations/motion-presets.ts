import type { Transition, Variants } from "framer-motion";

export const defaultTransition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1],
} satisfies Transition;

export const reducedMotionTransition = {
  duration: 0,
} satisfies Transition;

// Design system level transitions
export const TRANSITIONS = {
  smooth: {
    type: "tween",
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  slow: {
    type: "tween",
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  },
  gentle: {
    type: "spring",
    stiffness: 120,
    damping: 20,
  },
} as const;

// Reusable variants for standardized transitions
export const FADE_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITIONS.smooth
  },
};

export const BLUR_VARIANTS: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: TRANSITIONS.slow
  },
};

export const LIFT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.smooth
  },
};

export const SLIDE_LEFT_VARIANTS: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITIONS.smooth
  },
};

export const SLIDE_RIGHT_VARIANTS: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITIONS.smooth
  },
};

export const STAGGER_CONTAINER = (staggerChildren = 0.05, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const FLOATING_VARIANT = (y = 8, duration = 4): Variants => ({
  animate: {
    y: [0, -y, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export const GLOW_VARIANT: Variants = {
  initial: { opacity: 0, filter: "blur(16px)" },
  hover: {
    opacity: 0.15,
    filter: "blur(8px)",
    transition: { duration: 0.3 }
  },
};
