"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AvailabilityBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      className="inline-flex items-center gap-[var(--space-8)] rounded-[10px] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-6)] backdrop-blur-[var(--blur-glass)]"
    >
      <span className="relative flex h-2.5 w-2.5">
        <motion.span
          aria-hidden="true"
          {...(shouldReduceMotion ? {} : { animate: { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] } })}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[var(--radius-full)] bg-[var(--color-success)]"
        />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-[var(--radius-full)] bg-[var(--color-success)]" />
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[var(--color-text-secondary)]">Available for opportunities</span>
    </div>
  );
}
