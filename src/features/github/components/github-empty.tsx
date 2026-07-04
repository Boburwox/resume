"use client";

import { memo } from "react";
import { GitBranch } from "lucide-react";
import { cn } from "@/utils/cn";

interface GitHubEmptyProps {
  title?: string;
  description?: string;
  className?: string;
}

function GitHubEmptyComponent({
  title = "No repositories to display",
  description = "GitHub returned an empty result for this section.",
  className,
}: GitHubEmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[var(--space-16)] rounded-[var(--radius-2xl)] border border-dashed border-[var(--color-border)] px-[var(--space-24)] py-[var(--space-64)] text-center",
        className,
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)]">
        <GitBranch className="h-6 w-6 text-[var(--color-accent)]" aria-hidden="true" />
      </div>
      <div className="flex max-w-md flex-col gap-[var(--space-8)]">
        <h3 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">{description}</p>
      </div>
    </div>
  );
}

export const GitHubEmpty = memo(GitHubEmptyComponent);
