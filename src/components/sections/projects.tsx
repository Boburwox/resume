"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectFilter } from "@/components/common/project-filter";
import { ProjectStatus } from "@/components/common/project-status";
import { ProjectLinks } from "@/components/common/project-links";
import { ProjectMetrics } from "@/components/common/project-metrics";
import { ProjectPreview } from "@/components/cards/project-preview";
import { ProjectTechStack } from "@/components/cards/project-tech-stack";
import { ProjectCard } from "@/components/cards/project-card";
import { PROJECTS, PROJECT_FILTERS } from "@/data/projects";
import type { ProjectFilterId } from "@/types/project";

const EASE_EMPHASIZED = [0.16, 1, 0.3, 1] as const;

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const featuredProject = useMemo(() => PROJECTS.find((project) => project.featured) ?? PROJECTS[0], []);

  const filteredProjects = useMemo(() => {
    const base =
      activeFilter === "all"
        ? PROJECTS
        : activeFilter === "featured"
          ? PROJECTS.filter((project) => project.featured)
          : PROJECTS.filter((project) => project.category === activeFilter);

    return featuredProject ? base.filter((project) => project.id !== featuredProject.id) : base;
  }, [activeFilter, featuredProject]);

  const handleFilterChange = useCallback((id: ProjectFilterId) => {
    setActiveFilter(id);
  }, []);

  if (!featuredProject) return null;

  return (
    <section id="projects" aria-label="Featured projects" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-[420px] w-[420px] rounded-[var(--radius-full)] bg-[var(--color-accent)] opacity-[0.1] blur-[var(--blur-glass)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-[var(--radius-full)] bg-[var(--color-success)] opacity-[0.08] blur-[var(--blur-glass)]"
      />

      <div className="container relative z-10">
        <SectionHeading
          label="Selected Work"
          heading="Projects I&apos;m proud to have shipped"
          description="A mix of production products, open-source tools, and experiments — each one chosen to show how I think, not just what I built."
          align="center"
        />

        <motion.article
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 32,
            filter: shouldReduceMotion ? "blur(0px)" : "blur(12px)",
          }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE_EMPHASIZED, delay: 0.1 }}
          className="glass mt-[var(--space-64)] grid gap-[var(--space-32)] overflow-hidden rounded-[var(--radius-2xl)] p-[var(--space-16)] shadow-[var(--shadow-large)] lg:grid-cols-2 lg:gap-[var(--space-48)] lg:p-[var(--space-24)]"
        >
          <ProjectPreview
            src={featuredProject.coverImage}
            alt={featuredProject.title}
            priority
            className="h-64 w-full lg:h-full lg:min-h-[420px]"
          />

          <div className="flex flex-col gap-[var(--space-20)] px-[var(--space-8)] pb-[var(--space-16)] lg:py-[var(--space-16)] lg:pr-[var(--space-16)]">
            <div className="flex flex-wrap items-center gap-[var(--space-12)]">
              <ProjectStatus status={featuredProject.status} />
              <span className="text-xs font-medium uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                {featuredProject.year} · {featuredProject.role}
              </span>
            </div>

            <div>
              <h3 className="text-h3 font-bold text-[var(--color-text-primary)]">{featuredProject.title}</h3>
              <p className="mt-[var(--space-4)] text-body-lg text-[var(--color-text-secondary)]">
                {featuredProject.subtitle}
              </p>
            </div>

            <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
              {featuredProject.longDescription}
            </p>

            <ul className="flex flex-col gap-[var(--space-8)]" aria-label="Project highlights">
              {featuredProject.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-[var(--space-8)] text-sm text-[var(--color-text-secondary)]"
                >
                  <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-[var(--radius-full)] bg-[var(--color-accent)]" />
                  {highlight}
                </li>
              ))}
            </ul>

            <ProjectMetrics metrics={featuredProject.metrics} />
            <ProjectTechStack technologies={featuredProject.technologies} />
            <ProjectLinks
              {...(featuredProject.githubUrl ? { githubUrl: featuredProject.githubUrl } : {})}
              {...(featuredProject.liveUrl ? { liveUrl: featuredProject.liveUrl } : {})}
              className="mt-[var(--space-8)]"
            />
          </div>
        </motion.article>

        <div className="mt-[var(--space-64)] flex flex-col gap-[var(--space-24)]">
          <ProjectFilter options={PROJECT_FILTERS} activeId={activeFilter} onChange={handleFilterChange} />

          <motion.div layout className="grid grid-cols-1 gap-[var(--space-24)] sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center gap-[var(--space-8)] rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border)] py-[var(--space-64)] text-center">
              <p className="text-body-lg font-medium text-[var(--color-text-primary)]">No projects in this category yet</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Try another filter to see more work.</p>
            </div>
          )}
        </div>

        <div className="mt-[var(--space-64)] flex justify-center">
          <Button asChild variant="outline" size="lg" className="button-hover rounded-[var(--radius-md)]">
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
