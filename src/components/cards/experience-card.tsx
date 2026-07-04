"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

interface ExperienceCardProps {
  item: ExperienceItem;
  align: "left" | "right";
}

function ExperienceCardComponent({ item, align }: ExperienceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isRight = align === "right";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: shouldReduceMotion ? 0 : isRight ? 40 : -40,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
      }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="card-hover glass flex flex-col gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-24)]"
    >
      <div>
        <h3 className="text-h4 font-semibold text-[var(--color-text-primary)]">{item.role}</h3>
        <p className="text-sm font-medium text-[var(--color-accent)]">{item.company}</p>
      </div>

      <div className="flex flex-wrap items-center gap-[var(--space-16)] text-xs text-[var(--color-muted)]">
        <span className="inline-flex items-center gap-[var(--space-4)]">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {item.duration}
        </span>
        <span className="inline-flex items-center gap-[var(--space-4)]">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {item.location}
        </span>
      </div>

      <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
        {item.description}
      </p>

      <ul className="flex flex-wrap gap-[var(--space-8)]" aria-label={`Technologies used at ${item.company}`}>
        {item.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-[var(--radius-full)] border border-[var(--color-border)] px-[var(--space-12)] py-[var(--space-4)] text-xs font-medium text-[var(--color-text-secondary)]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export const ExperienceCard = memo(ExperienceCardComponent);
