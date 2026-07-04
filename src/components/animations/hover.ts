import type { Variants } from "framer-motion";

export const HOVER_LIFT_VARIANTS: Variants = {
    initial: { y: 0 },
    hover: {
        y: -4,
        transition: {
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export const HOVER_GLOW_VARIANTS: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    hover: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export const HOVER_SCALE_VARIANTS: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export const BUTTON_PRESS_VARIANTS: Variants = {
    initial: { scale: 1 },
    press: {
        scale: 0.97,
        transition: {
            duration: 0.1,
            ease: "linear",
        },
    },
};
