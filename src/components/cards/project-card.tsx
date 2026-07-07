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
      className="glass group flex flex-col gap-[var(--space-16)] overflow-hidden rounded-[var(--radius-xl)] p-[var(--space-24)] shadow-[var(--shadow-soft)] transition-shadow duration-[var(--duration-normal)] hover:shadow-[var(--shadow-large)] border border-[var(--color-glass-border)] bg-[var(--color-glass)]"
    >
      <div className="relative overflow-hidden rounded-[16px]">
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
            className="absolute bottom-[var(--space-16)] right-[var(--space-16)] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-[var(--color-glass-border)] bg-[var(--color-glass)] text-[var(--color-text-primary)] backdrop-blur-[var(--blur-card)] transition-all duration-[var(--duration-fast)] hover:bg-[var(--color-glass-strong)] hover:shadow-[0_0_8px_rgba(255,255,255,0.08)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <ArrowUpRight className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-[var(--space-12)] px-1 pt-1">
        <div>
          <h3 className="text-body-lg font-bold text-[var(--color-text-primary)]">{project.title}</h3>
          <p className="text-sm font-medium text-[var(--color-text-secondary)]">{project.subtitle}</p>
        </div>

        <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium">
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
