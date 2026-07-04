"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const EASE_EMPHASIZED = [0.16, 1, 0.3, 1] as const;

export function SectionHeading({ label, heading, description, align = "left", className }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EMPHASIZED } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col gap-[var(--space-12)]",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <motion.span
        variants={item}
        className="text-xs font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)]"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={item}
        className="text-h2 font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          variants={item}
          className={cn(
            "text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
