"use client";

import { ReactNode, useMemo } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export type ScrollRevealVariant = "fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "blur" | "scale";

interface ScrollRevealProps {
    children: ReactNode;
    variant?: ScrollRevealVariant;
    duration?: number;
    delay?: number;
    threshold?: number | "some" | "all";
    once?: boolean;
    className?: string;
    as?: "div" | "section" | "article" | "span" | "header" | "footer";
}

export function ScrollReveal({
    children,
    variant = "fade-up",
    duration = 0.55,
    delay = 0,
    threshold = 0.15,
    once = true,
    className,
    as = "div",
}: ScrollRevealProps) {
    const shouldReduceMotion = useReducedMotion();

    const animationVariants = useMemo<Variants>(() => {
        if (shouldReduceMotion) {
            return {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0 } },
            };
        }

        const defaultTransition = {
            type: "tween" as const,
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
        };

        switch (variant) {
            case "fade":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: defaultTransition },
                };
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: defaultTransition },
                };
            case "fade-down":
                return {
                    hidden: { opacity: 0, y: -24 },
                    visible: { opacity: 1, y: 0, transition: defaultTransition },
                };
            case "fade-left":
                return {
                    hidden: { opacity: 0, x: 24 },
                    visible: { opacity: 1, x: 0, transition: defaultTransition },
                };
            case "fade-right":
                return {
                    hidden: { opacity: 0, x: -24 },
                    visible: { opacity: 1, x: 0, transition: defaultTransition },
                };
            case "blur":
                return {
                    hidden: { opacity: 0, filter: "blur(8px)" },
                    visible: { opacity: 1, filter: "blur(0px)", transition: defaultTransition },
                };
            case "scale":
                return {
                    hidden: { opacity: 0, scale: 0.94 },
                    visible: { opacity: 1, scale: 1, transition: defaultTransition },
                };
            default:
                return {
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: defaultTransition },
                };
        }
    }, [variant, duration, delay, shouldReduceMotion]);

    const Component = motion[as] as unknown as React.FC<React.ComponentProps<typeof motion.div>>;

    return (
        <Component
            variants={animationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            className={className}
        >
            {children}
        </Component>
    );
}
