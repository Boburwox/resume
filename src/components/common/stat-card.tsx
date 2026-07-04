"use client";

import { memo, useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

function StatCardComponent({ icon: Icon, value, suffix = "", label, className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.94 }}
      {...(isInView ? { animate: { opacity: 1, y: 0, scale: 1 } } : {})}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "card-hover glass flex flex-col gap-[var(--space-12)] rounded-[var(--radius-xl)] p-[var(--space-24)]",
        className
      )}
    >
      <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
      <span className="text-h2 font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
        {displayValue}
        {suffix}
      </span>
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
    </motion.div>
  );
}

export const StatCard = memo(StatCardComponent);
