"use client";

import { memo, useCallback } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectFilterId, ProjectFilterOption } from "@/types/project";

interface FilterButtonProps {
  option: ProjectFilterOption;
  isActive: boolean;
  onSelect: (id: ProjectFilterId) => void;
}

const FilterButton = memo(function FilterButton({ option, isActive, onSelect }: FilterButtonProps) {
  const handleClick = useCallback(() => onSelect(option.id), [option.id, onSelect]);

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
          layoutId="project-filter-pill"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="absolute inset-0 -z-10 rounded-[var(--radius-full)] bg-[var(--color-accent)]"
        />
      )}
      <span className="relative z-10">{option.label}</span>
    </button>
  );
});

interface ProjectFilterProps {
  options: ProjectFilterOption[];
  activeId: ProjectFilterId;
  onChange: (id: ProjectFilterId) => void;
  className?: string;
}

function ProjectFilterComponent({ options, activeId, onChange, className }: ProjectFilterProps) {
  return (
    <LayoutGroup id="project-filter">
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className={cn("flex gap-[var(--space-8)] overflow-x-auto pb-[var(--space-8)]", className)}
      >
        {options.map((option) => (
          <FilterButton key={option.id} option={option} isActive={activeId === option.id} onSelect={onChange} />
        ))}
      </div>
    </LayoutGroup>
  );
}

export const ProjectFilter = memo(ProjectFilterComponent);
