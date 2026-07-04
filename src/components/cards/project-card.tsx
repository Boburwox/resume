"use client";

import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectPreview } from "@/components/cards/project-preview";
import { ProjectTechStack } from "@/components/cards/project-tech-stack";
import { ProjectStatus } from "@/components/common/project-status";
import { ProjectLinks } from "@/components/common/project-links";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCardComponent({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const detailsUrl = project.liveUrl ?? project.githubUrl;

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 28,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: "-60px" }}
      {...(shouldReduceMotion ? {} : { whileHover: { y: -8 } })}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass group flex flex-col gap-[var(--space-16)] overflow-hidden rounded-[var(--radius-2xl)] p-[var(--space-16)] shadow-[var(--shadow-soft)] transition-shadow duration-[var(--duration-normal)] hover:shadow-[var(--shadow-large)]"
    >
      <div className="relative">
        <ProjectPreview src={project.coverImage} alt={project.title} className="h-52 w-full" />
        <div className="absolute left-[var(--space-16)] top-[var(--space-16)]">
          <ProjectStatus status={project.status} />
        </div>
        {detailsUrl && (
          <a
            href={detailsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute bottom-[var(--space-16)] right-[var(--space-16)] flex h-9 w-9 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-glass-border)] bg-[var(--color-glass)] text-[var(--color-text-primary)] backdrop-blur-[var(--blur-card)] transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-1 group-hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-[var(--space-12)] px-[var(--space-8)] pb-[var(--space-8)]">
        <div>
          <h3 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{project.title}</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">{project.subtitle}</p>
        </div>

        <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          {project.description}
        </p>

        <ProjectTechStack technologies={project.technologies} limit={4} />

        <ProjectLinks
          {...(project.githubUrl ? { githubUrl: project.githubUrl } : {})}
          {...(project.liveUrl ? { liveUrl: project.liveUrl } : {})}
          className="mt-auto pt-[var(--space-8)]"
        />
      </div>
    </motion.article>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
