"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";
import type { ProjectMetric } from "@/types/project";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  className?: string;
}

function ProjectMetricsComponent({ metrics, className }: ProjectMetricsProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-[var(--space-12)] sm:grid-cols-4", className)}>
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-12)] backdrop-blur-[var(--blur-card)]"
          >
            <Icon className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
            <dd className="text-sm font-semibold text-[var(--color-text-primary)]">{metric.value}</dd>
            <dt className="text-[10px] font-medium uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">
              {metric.label}
            </dt>
          </div>
        );
      })}
    </dl>
  );
}

export const ProjectMetrics = memo(ProjectMetricsComponent);
