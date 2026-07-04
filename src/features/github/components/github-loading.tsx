"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SkeletonBlockProps {
  className?: string;
}

function SkeletonBlock({ className }: SkeletonBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      {...(!shouldReduceMotion ? { animate: { opacity: [0.45, 0.85, 0.45] } } : {})}
      transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
      className={cn("rounded-[var(--radius-md)] bg-[var(--color-glass)]", className)}
    />
  );
}

function GitHubLoadingComponent() {
  return (
    <div role="status" aria-label="Loading GitHub dashboard" className="flex flex-col gap-[var(--space-32)]">
      <div className="glass grid gap-[var(--space-24)] rounded-[var(--radius-2xl)] p-[var(--space-24)] md:grid-cols-[auto_1fr]">
        <SkeletonBlock className="h-24 w-24 rounded-[var(--radius-full)]" />
        <div className="flex flex-col gap-[var(--space-16)]">
          <SkeletonBlock className="h-8 w-48" />
          <SkeletonBlock className="h-4 w-32" />
          <SkeletonBlock className="h-16 w-full max-w-2xl" />
          <div className="grid gap-[var(--space-12)] sm:grid-cols-3">
            <SkeletonBlock className="h-20" />
            <SkeletonBlock className="h-20" />
            <SkeletonBlock className="h-20" />
          </div>
        </div>
      </div>

      <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-32 rounded-[var(--radius-xl)]" />
        ))}
      </div>

      <div className="grid gap-[var(--space-24)] lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-64 rounded-[var(--radius-2xl)]" />
        ))}
      </div>
    </div>
  );
}

export const GitHubLoading = memo(GitHubLoadingComponent);
