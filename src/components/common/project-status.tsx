"use client";

import { memo } from "react";
import { Archive, CheckCircle2, GitFork, Loader2, Lock, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectStatus as ProjectStatusType } from "@/types/project";

interface StatusConfig {
  label: string;
  icon: LucideIcon;
  className: string;
}

const STATUS_CONFIG: Record<ProjectStatusType, StatusConfig> = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "border-[var(--color-success)] text-[var(--color-success)]",
  },
  "in-progress": {
    label: "In Progress",
    icon: Loader2,
    className: "border-[var(--color-warning)] text-[var(--color-warning)]",
  },
  private: {
    label: "Private",
    icon: Lock,
    className: "border-[var(--color-border)] text-[var(--color-text-secondary)]",
  },
  archived: {
    label: "Archived",
    icon: Archive,
    className: "border-[var(--color-border)] text-[var(--color-muted)]",
  },
  "open-source": {
    label: "Open Source",
    icon: GitFork,
    className: "border-[var(--color-accent)] text-[var(--color-accent)]",
  },
};

interface ProjectStatusProps {
  status: ProjectStatusType;
  className?: string;
}

function ProjectStatusComponent({ status, className }: ProjectStatusProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-[var(--space-4)] rounded-[var(--radius-full)] border bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-4)] text-xs font-semibold backdrop-blur-[var(--blur-card)]",
        config.className,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {config.label}
    </span>
  );
}

export const ProjectStatus = memo(ProjectStatusComponent);
