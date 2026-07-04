"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
    const shouldReduceMotion = useReducedMotion();

    const transitionVariants = {
        initial: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 6,
            filter: shouldReduceMotion ? "none" : "blur(4px)",
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
        exit: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : -6,
            filter: shouldReduceMotion ? "none" : "blur(4px)",
            transition: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <motion.div
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            className={className}
        >
            {children}
        </motion.div>
    );
}
export default PageTransition;
