"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { AvailabilityItem } from "@/types/contact";

interface AvailabilityCardProps {
  items: AvailabilityItem[];
}

function AvailabilityCardComponent({ items }: AvailabilityCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="availability-title" className="glass rounded-[var(--radius-xl)] p-[var(--space-32)] border border-[var(--color-glass-border)] bg-[var(--color-glass)] shadow-[var(--shadow-glass)]">
      <div className="flex flex-col gap-[var(--space-8)]">
        <h3 id="availability-title" className="text-h3 font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
          Availability Status
        </h3>
        <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium">
          Practical context for hiring, collaboration, and response expectations.
        </p>
      </div>
      <div className="mt-[var(--space-24)] grid gap-[var(--space-16)] md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-20)]"
            >
              <Icon className="h-5 w-5 text-[var(--color-accent)] stroke-[1.5]" aria-hidden="true" />
              <p className="mt-[var(--space-16)] text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)] font-bold">
                {item.label}
              </p>
              <h4 className="mt-[var(--space-4)] text-body-lg font-bold text-[var(--color-text-primary)]">{item.value}</h4>
              <p className="mt-[var(--space-8)] text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export const AvailabilityCard = memo(AvailabilityCardComponent);
