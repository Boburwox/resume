"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { TimelineMilestone } from "@/types/resume";

interface TimelineItemProps {
  item: TimelineMilestone;
  align?: "left" | "right";
}

function TimelineItemComponent({ item, align = "left" }: TimelineItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : align === "right" ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex flex-col gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]"
    >
      <div className="flex items-start justify-between gap-[var(--space-16)]">
        <div className="flex min-w-0 items-center gap-[var(--space-12)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-accent)]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-body-lg font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)]">{item.date}</p>
          </div>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-[var(--radius-full)] border px-[var(--space-12)] py-[var(--space-4)] text-xs capitalize",
            item.status === "current"
              ? "border-[var(--color-accent)] text-[var(--color-accent)]"
              : "border-[var(--color-border)] text-[var(--color-text-secondary)]"
          )}
        >
          {item.status}
        </span>
      </div>
      <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">{item.description}</p>
      <ul className="flex flex-wrap gap-[var(--space-8)]" aria-label={`${item.title} tags`}>
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-4)] text-xs text-[var(--color-text-secondary)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export const TimelineItem = memo(TimelineItemComponent);
