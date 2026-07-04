"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ResumeData } from "@/types/resume";

interface ResumeHeaderProps {
  summary: ResumeData["summary"];
}

function ResumeHeaderComponent({ summary }: ResumeHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-[var(--radius-2xl)] p-[var(--space-24)] shadow-[var(--shadow-large)] lg:p-[var(--space-32)]"
    >
      <div className="grid gap-[var(--space-32)] lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="flex flex-col gap-[var(--space-16)]">
          <span className="text-xs font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)]">
            Resume Experience
          </span>
          <h2 className="max-w-4xl text-h2 font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
            {summary.title}
          </h2>
          <p className="max-w-3xl text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
            {summary.description}
          </p>
        </div>

        <dl className="grid gap-[var(--space-12)] sm:grid-cols-3 lg:grid-cols-1">
          {summary.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-16)]"
            >
              <dd className="text-body-lg font-semibold text-[var(--color-text-primary)]">{metric.value}</dd>
              <dt className="mt-[var(--space-4)] text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </motion.header>
  );
}

export const ResumeHeader = memo(ResumeHeaderComponent);
