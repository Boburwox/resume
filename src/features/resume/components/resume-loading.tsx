"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function ResumeLoadingComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div role="status" aria-label="Loading resume experience" className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          {...(shouldReduceMotion ? {} : { animate: { opacity: [0.45, 0.85, 0.45] } })}
          transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
          className="h-40 rounded-[var(--radius-xl)] bg-[var(--color-glass)]"
        />
      ))}
    </div>
  );
}

export const ResumeLoading = memo(ResumeLoadingComponent);
