"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-[var(--space-32)] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[var(--space-12)]"
    >
      <span className="text-xs font-medium uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
        Scroll
      </span>
      <div className="flex h-9 w-6 justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] pt-[var(--space-8)]">
        <motion.span
          {...(shouldReduceMotion ? {} : { animate: { y: [0, 12, 0], opacity: [1, 0, 1] } })}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-[var(--radius-full)] bg-[var(--color-text-secondary)]"
        />
      </div>
    </motion.div>
  );
}
