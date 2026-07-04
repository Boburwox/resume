"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";
import { TechBadge } from "@/components/common/tech-badge";

interface ProjectTechStackProps {
  technologies: string[];
  limit?: number;
  className?: string;
}

function ProjectTechStackComponent({ technologies, limit, className }: ProjectTechStackProps) {
  const visible = limit ? technologies.slice(0, limit) : technologies;
  const remaining = limit ? technologies.length - visible.length : 0;

  return (
    <ul className={cn("flex flex-wrap gap-[var(--space-8)]", className)} aria-label="Technologies used">
      {visible.map((tech) => (
        <li key={tech}>
          <TechBadge label={tech} />
        </li>
      ))}
      {remaining > 0 && (
        <li className="inline-flex items-center rounded-[var(--radius-full)] border border-[var(--color-border)] px-[var(--space-12)] py-[var(--space-8)] text-sm font-medium text-[var(--color-muted)]">
          +{remaining} more
        </li>
      )}
    </ul>
  );
}

export const ProjectTechStack = memo(ProjectTechStackComponent);
