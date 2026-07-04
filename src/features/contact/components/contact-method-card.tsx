"use client";

import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ContactMethod } from "@/types/contact";

interface ContactMethodCardProps {
  method: ContactMethod;
}

function ContactMethodCardComponent({ method }: ContactMethodCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = method.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...(shouldReduceMotion ? {} : { whileHover: { y: -5 } })}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex h-full flex-col gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]"
    >
      <div className="flex items-start justify-between gap-[var(--space-16)]">
        <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
        <a
          href={method.href}
          target={method.href.startsWith("#") ? undefined : "_blank"}
          rel={method.href.startsWith("#") ? undefined : "noreferrer"}
          aria-label={method.actionLabel}
          className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div>
        <h4 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{method.title}</h4>
        <p className="mt-[var(--space-8)] text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          {method.description}
        </p>
      </div>
      <a href={method.href} className="mt-auto text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-text-primary)]">
        {method.actionLabel}
      </a>
    </motion.article>
  );
}

export const ContactMethodCard = memo(ContactMethodCardComponent);
