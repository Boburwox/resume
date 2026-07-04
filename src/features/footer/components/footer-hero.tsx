"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function FooterHeroComponent() {
    const shouldReduceMotion = useReducedMotion();

    const titleWords = "Let's build something remarkable.".split(" ");

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
            filter: shouldReduceMotion ? "none" : "blur(8px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <div className="flex flex-col gap-[var(--space-16)] py-[var(--space-24)] text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)]">
                In Summary
            </span>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]"
            >
                {titleWords.map((word, index) => (
                    <motion.h2
                        key={index}
                        variants={childVariants}
                        className="text-h2 sm:text-h1 font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
                    >
                        {word}
                    </motion.h2>
                ))}
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]"
            >
                Thank you for scanning through my work. If you value execution, clean abstractions, and high-performance user interfaces, let's connect.
            </motion.p>
        </div>
    );
}

export const FooterHero = memo(FooterHeroComponent);
