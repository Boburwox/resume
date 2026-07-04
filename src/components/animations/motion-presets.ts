import type { Transition } from "framer-motion";

export const defaultTransition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1],
} satisfies Transition;

export const reducedMotionTransition = {
  duration: 0,
} satisfies Transition;
