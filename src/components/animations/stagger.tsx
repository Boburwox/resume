"use client";

import { ReactNode, useMemo } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface StaggerProps {
    children: ReactNode;
    staggerChildren?: number;
    delayChildren?: number;
    once?: boolean;
    threshold?: number | "some" | "all";
    className?: string;
    as?: "div" | "ul" | "ol" | "section" | "article" | "nav";
}

export function Stagger({
    children,
    staggerChildren = 0.05,
    delayChildren = 0,
    once = true,
    threshold = 0.1,
    className,
    as = "div",
}: StaggerProps) {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = useMemo<Variants>(() => {
        return {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
                    delayChildren: shouldReduceMotion ? 0 : delayChildren,
                },
            },
        };
    }, [staggerChildren, delayChildren, shouldReduceMotion]);

    const Component = motion[as] as unknown as React.FC<React.ComponentProps<typeof motion.div>>;

    return (
        <Component
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            className={className}
        >
            {children}
        </Component>
    );
}

interface StaggerChildProps {
    children: ReactNode;
    className?: string;
    as?: "div" | "li" | "span" | "article";
}

export function StaggerChild({
    children,
    className,
    as = "div",
}: StaggerChildProps) {
    const shouldReduceMotion = useReducedMotion();

    const childVariants = useMemo<Variants>(() => {
        if (shouldReduceMotion) {
            return {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0 } },
            };
        }

        return {
            hidden: { opacity: 0, y: 15 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "tween",
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1] as const,
                },
            },
        };
    }, [shouldReduceMotion]);

    const Component = motion[as] as unknown as React.FC<React.ComponentProps<typeof motion.div>>;

    return (
        <Component
            variants={childVariants}
            className={className}
        >
            {children}
        </Component>
    );
}
