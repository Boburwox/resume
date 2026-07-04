"use client";

import { memo, useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { formatCompactNumber } from "@/features/github/services/github-service";

interface GitHubStatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  className?: string;
}

function GitHubStatCardComponent({ icon: Icon, label, value, className }: GitHubStatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  const renderedValue = shouldReduceMotion ? value : displayValue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 18 }}
      {...(isInView ? { animate: { opacity: 1, scale: 1, y: 0 } } : {})}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass card-hover flex min-h-32 flex-col justify-between rounded-[var(--radius-xl)] p-[var(--space-20)]",
        className,
      )}
    >
      <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
      <div className="flex flex-col gap-[var(--space-4)]">
        <span className="text-h3 font-bold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          {formatCompactNumber(renderedValue)}
        </span>
        <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
      </div>
    </motion.div>
  );
}

export const GitHubStatCard = memo(GitHubStatCardComponent);
