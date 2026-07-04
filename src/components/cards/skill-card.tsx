"use client";

import { memo, useCallback } from "react";
import type { PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/skill";

const LEVEL_LABEL: Record<Skill["level"], string> = {
  learning: "Learning",
  comfortable: "Comfortable",
  advanced: "Advanced",
  expert: "Expert",
};

const LEVEL_STYLE: Record<Skill["level"], string> = {
  learning: "border-[var(--color-border)] text-[var(--color-text-secondary)]",
  comfortable: "border-[var(--color-accent)] text-[var(--color-accent)]",
  advanced: "border-[var(--color-success)] text-[var(--color-success)]",
  expert: "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)]",
};

interface SkillCardProps {
  skill: Skill;
}

function SkillCardComponent({ skill }: SkillCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = skill.icon;

  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${pointerX}% ${pointerY}%, var(--color-accent) 0%, transparent 70%)`;

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
      pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
    },
    [pointerX, pointerY, shouldReduceMotion]
  );

  const handlePointerLeave = useCallback(() => {
    pointerX.set(50);
    pointerY.set(50);
  }, [pointerX, pointerY]);

  return (
    <motion.article
      layout
      tabIndex={0}
      aria-label={`${skill.name}, ${LEVEL_LABEL[skill.level]} level`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: "-60px" }}
      {...(shouldReduceMotion ? {} : { whileHover: { y: -6, scale: 1.02 } })}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-[var(--space-16)] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] p-[var(--space-24)] shadow-[var(--shadow-soft)] transition-shadow duration-[var(--duration-normal)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-medium)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glowBackground }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--duration-normal)] group-hover:opacity-[0.08]"
      />

      <div className="relative z-10 flex items-start justify-between gap-[var(--space-12)]">
        <motion.div
          {...(shouldReduceMotion ? {} : { whileHover: { rotate: 8, scale: 1.08 } })}
          transition={{ type: "spring", stiffness: 340, damping: 18 }}
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-accent)]"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </motion.div>

        <span
          className={cn(
            "shrink-0 rounded-[var(--radius-full)] border px-[var(--space-12)] py-[var(--space-4)] text-[10px] font-semibold uppercase tracking-[var(--tracking-wider)]",
            LEVEL_STYLE[skill.level]
          )}
        >
          {LEVEL_LABEL[skill.level]}
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-[var(--space-4)]">
        <h3 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{skill.name}</h3>
        <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">
          {skill.category}
        </p>
      </div>

      <p className="relative z-10 text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
        {skill.description}
      </p>
    </motion.article>
  );
}

export const SkillCard = memo(SkillCardComponent);
