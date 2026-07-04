"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { TechJourneyStep } from "@/types/resume";

interface TechJourneyProps {
  items: TechJourneyStep[];
}

function TechJourneyComponent({ items }: TechJourneyProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="tech-journey-title" className="flex flex-col gap-[var(--space-24)]">
      <div>
        <h3 id="tech-journey-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          Tech Journey
        </h3>
        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Technology growth shown as an evolution path rather than a flat skill inventory.
        </p>
      </div>
      <div className="grid gap-[var(--space-12)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative min-h-44 rounded-[var(--radius-xl)] p-[var(--space-16)]"
            >
              <div className="flex items-start justify-between gap-[var(--space-12)]">
                <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs text-[var(--color-muted)]">{item.date}</span>
              </div>
              <h4 className="mt-[var(--space-24)] text-body-lg font-semibold text-[var(--color-text-primary)]">{item.label}</h4>
              <p className="mt-[var(--space-8)] text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export const TechJourney = memo(TechJourneyComponent);
