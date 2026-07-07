"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface TechBadgeProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

function TechBadgeComponent({ label, icon: Icon, className }: TechBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      {...(shouldReduceMotion ? {} : { whileHover: { y: -2, scale: 1.03 } })}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "group relative inline-flex items-center gap-[var(--space-8)] overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-6)] text-xs font-semibold text-[var(--color-text-secondary)] backdrop-blur-[var(--blur-card)] transition-colors duration-[160ms] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer select-none",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[10px] bg-[linear-gradient(120deg,transparent,var(--color-accent),transparent)] opacity-0 transition-opacity duration-[var(--duration-normal)] group-hover:opacity-10"
      />
      {Icon && <Icon className="relative z-10 h-4 w-4 text-[var(--color-accent)] stroke-[1.5]" aria-hidden="true" />}
      <span className="relative z-10">{label}</span>
    </motion.span>
  );
}

export const TechBadge = memo(TechBadgeComponent);
