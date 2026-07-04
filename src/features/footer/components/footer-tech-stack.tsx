"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TechItem {
    name: string;
    category: string;
}

const TECH_STACK: TechItem[] = [
    { name: "Next.js 16", category: "Framework" },
    { name: "React 19", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS v4", category: "Styling" },
    { name: "Framer Motion", category: "Animation" },
    { name: "shadcn/ui", category: "Design System" },
    { name: "Vercel", category: "Hosting" },
];

function FooterTechStackComponent() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                Built With
            </h3>
            <div className="flex flex-wrap gap-[var(--space-8)] max-w-md">
                {TECH_STACK.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : index * 0.04 }}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                        className="group relative flex items-center gap-[var(--space-8)] rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-6)] text-xs text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass-strong)] shadow-sm"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-[10px] text-[var(--color-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                            {tech.category}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export const FooterTechStack = memo(FooterTechStackComponent);
