"use client";

import { memo } from "react";
import { BriefcaseBusiness } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ResumeExperienceRecord } from "@/types/resume";

interface ExperienceCardProps {
  item: ResumeExperienceRecord;
}

function ExperienceCardComponent({ item }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex h-full flex-col gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]"
    >
      <div className="flex items-start gap-[var(--space-12)]">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-accent)]">
          <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{item.role}</h4>
          <p className="text-sm text-[var(--color-text-secondary)]">{item.company}</p>
          <p className="text-xs text-[var(--color-muted)]">{item.duration}</p>
        </div>
      </div>
      <ul className="flex flex-col gap-[var(--space-8)]" aria-label={`${item.role} responsibilities`}>
        {item.responsibilities.map((responsibility) => (
          <li key={responsibility} className="flex gap-[var(--space-8)] text-sm text-[var(--color-text-secondary)]">
            <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-[var(--radius-full)] bg-[var(--color-accent)]" />
            {responsibility}
          </li>
        ))}
      </ul>
      <ul className="mt-auto flex flex-wrap gap-[var(--space-8)]" aria-label={`${item.role} technologies`}>
        {item.technologies.map((technology) => (
          <li key={technology} className="rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-4)] text-xs text-[var(--color-text-secondary)]">
            {technology}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export const ExperienceCard = memo(ExperienceCardComponent);
