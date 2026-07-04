"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/section-heading";
import { TechBadge } from "@/components/common/tech-badge";
import { CategoryCard } from "@/components/cards/category-card";
import { SkillCard } from "@/components/cards/skill-card";
import { ENGINEERING_PRINCIPLES, SKILLS, SKILL_CATEGORIES } from "@/constants/skills";

const EASE_EMPHASIZED = [0.16, 1, 0.3, 1] as const;

interface FilterTabProps {
  id: string;
  label: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const FilterTab = memo(function FilterTab({ id, label, isActive, onSelect }: FilterTabProps) {
  const handleClick = useCallback(() => onSelect(id), [id, onSelect]);

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={handleClick}
      className={cn(
        "relative shrink-0 rounded-[var(--radius-full)] px-[var(--space-16)] py-[var(--space-8)] text-sm font-medium transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
        isActive
          ? "text-[var(--color-accent-foreground)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      )}
    >
      {isActive && (
        <motion.span
          layoutId="skills-filter-pill"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="absolute inset-0 -z-10 rounded-[var(--radius-full)] bg-[var(--color-accent)]"
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
});

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const skillsByCategory = useMemo(
    () =>
      SKILL_CATEGORIES.map((category) => ({
        category,
        skills: SKILLS.filter((skill) => category.skillIds.includes(skill.id)),
      })),
    []
  );

  const filteredSkills = useMemo(() => {
    if (activeCategoryId === "all") return SKILLS;
    return SKILLS.filter((skill) => skill.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  const handleFilterChange = useCallback((id: string) => {
    setActiveCategoryId(id);
  }, []);

  return (
    <section id="skills" aria-label="Skills and tech stack" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-[var(--radius-full)] bg-[var(--color-accent)] opacity-[0.1] blur-[var(--blur-glass)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-[var(--radius-full)] bg-[var(--color-success)] opacity-[0.08] blur-[var(--blur-glass)]"
      />

      <div className="container relative z-10">
        <SectionHeading
          label="Skills & Tech Stack"
          heading="Tools I use to build production software"
          description="A curated set of technologies I reach for daily, chosen for reliability, performance, and how well they compose together."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_EMPHASIZED, delay: 0.1 }}
          className="mt-[var(--space-64)] grid grid-cols-1 gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillsByCategory.map(({ category, skills }) => (
            <CategoryCard key={category.id} category={category} skills={skills} />
          ))}
        </motion.div>

        <div className="mt-[var(--space-96)] flex flex-col gap-[var(--space-32)]">
          <h3 className="text-h4 font-semibold text-[var(--color-text-primary)]">Explore by category</h3>

          <LayoutGroup id="skills-filter">
            <div
              role="tablist"
              aria-label="Filter skills by category"
              className="flex gap-[var(--space-8)] overflow-x-auto pb-[var(--space-8)]"
            >
              <FilterTab id="all" label="All" isActive={activeCategoryId === "all"} onSelect={handleFilterChange} />
              {SKILL_CATEGORIES.map((category) => (
                <FilterTab
                  key={category.id}
                  id={category.id}
                  label={category.title}
                  isActive={activeCategoryId === category.id}
                  onSelect={handleFilterChange}
                />
              ))}
            </div>
          </LayoutGroup>

          <motion.div
            layout
            className="grid grid-cols-1 gap-[var(--space-20)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-[var(--space-96)] flex flex-col items-center gap-[var(--space-24)]">
          <h3 className="text-h4 font-semibold text-[var(--color-text-primary)]">Also comfortable with</h3>
          <ul
            className="flex flex-wrap items-center justify-center gap-[var(--space-12)]"
            aria-label="Additional technologies"
          >
            {SKILLS.map((skill) => (
              <li key={skill.id}>
                <TechBadge label={skill.name} icon={skill.icon} />
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24,
            scale: shouldReduceMotion ? 1 : 0.98,
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE_EMPHASIZED }}
          className="glass mt-[var(--space-96)] rounded-[var(--radius-2xl)] p-[var(--space-32)] lg:p-[var(--space-48)]"
        >
          <h3 className="text-h3 font-bold text-[var(--color-text-primary)]">How I Build Software</h3>
          <p className="mt-[var(--space-12)] max-w-2xl text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
            The principles that guide every decision, from the first commit to the last deploy.
          </p>

          <div className="mt-[var(--space-32)] grid grid-cols-1 gap-[var(--space-24)] sm:grid-cols-2 lg:grid-cols-3">
            {ENGINEERING_PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.id} className="flex flex-col gap-[var(--space-12)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h4 className="text-body font-semibold text-[var(--color-text-primary)]">{principle.title}</h4>
                  <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
