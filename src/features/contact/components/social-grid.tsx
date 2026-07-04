"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SocialContact } from "@/types/contact";

interface SocialGridProps {
  items: SocialContact[];
}

function SocialGridComponent({ items }: SocialGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="contact-social-title" className="flex flex-col gap-[var(--space-24)]">
      <div>
        <h3 id="contact-social-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          Social Links
        </h3>
        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Public channels for code, professional updates, and quick communication.
        </p>
      </div>
      <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              {...(shouldReduceMotion ? {} : { whileHover: { y: -4 } })}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="glass flex items-center gap-[var(--space-12)] rounded-[var(--radius-xl)] p-[var(--space-16)] text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
              {item.label}
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export const SocialGrid = memo(SocialGridComponent);
