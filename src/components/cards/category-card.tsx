"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import { TechBadge } from "@/components/common/tech-badge";
import type { Skill, SkillCategory } from "@/types/skill";

interface CategoryCardProps {
  category: SkillCategory;
  skills: Skill[];
  className?: string;
}

function CategoryCardComponent({ category, skills, className }: CategoryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = category.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 20,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      {...(shouldReduceMotion ? {} : { whileHover: { y: -4 } })}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass flex flex-col gap-[var(--space-20)] rounded-[var(--radius-xl)] p-[var(--space-32)] border border-[var(--color-glass-border)] bg-[var(--color-glass)] shadow-[var(--shadow-glass)] hover:-translate-y-[2px] transition-transform duration-[250ms]",
        className
      )}
    >
      <div className="flex items-center gap-[var(--space-12)]">
        <motion.div
          {...(shouldReduceMotion ? {} : { whileHover: { rotate: -6, scale: 1.06 } })}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]"
        >
          <Icon className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
        </motion.div>
        <h3 className="text-body-lg font-bold text-[var(--color-text-primary)]">{category.title}</h3>
      </div>

      <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium">
        {category.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-[var(--space-8)] pt-2" aria-label={`${category.title} technologies`}>
        {skills.map((skill) => (
          <TechBadge key={skill.id} label={skill.name} icon={skill.icon} />
        ))}
      </div>
    </motion.article>
  );
}

export const CategoryCard = memo(CategoryCardComponent);
