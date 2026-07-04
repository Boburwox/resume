"use client";

import { memo } from "react";
import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { EducationRecord } from "@/types/resume";

interface EducationCardProps {
  item: EducationRecord;
}

function EducationCardComponent({ item }: EducationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex flex-col gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]"
    >
      <div className="flex items-start gap-[var(--space-12)]">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-accent)]">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{item.degree}</h4>
          <p className="text-sm text-[var(--color-text-secondary)]">{item.school}</p>
          <p className="text-xs text-[var(--color-muted)]">{item.duration}</p>
        </div>
      </div>
      <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">{item.description}</p>
      <ul className="flex flex-col gap-[var(--space-8)]" aria-label={`${item.school} achievements`}>
        {item.achievements.map((achievement) => (
          <li key={achievement} className="flex gap-[var(--space-8)] text-sm text-[var(--color-text-secondary)]">
            <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-[var(--radius-full)] bg-[var(--color-accent)]" />
            {achievement}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export const EducationCard = memo(EducationCardComponent);
