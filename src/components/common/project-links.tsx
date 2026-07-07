"use client";

import { memo } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

function ProjectLinksComponent({ githubUrl, liveUrl, className }: ProjectLinksProps) {
  if (!githubUrl && !liveUrl) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-[var(--space-12)]", className)}>
      {githubUrl && (
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group cursor-pointer"
        >
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="View source on GitHub">
            <Github className="mr-1.5 h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5" aria-hidden="true" />
            Source
          </a>
        </Button>
      )}
      {liveUrl && (
        <Button
          asChild
          variant="default"
          size="sm"
          className="group cursor-pointer"
        >
          <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="View live demo">
            Live Demo
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      )}
    </div>
  );
}

export const ProjectLinks = memo(ProjectLinksComponent);
