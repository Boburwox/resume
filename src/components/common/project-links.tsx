"use client";

import { memo } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        <Button asChild variant="outline" size="sm" className="button-hover rounded-[var(--radius-md)]">
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="View source on GitHub">
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            Source
          </a>
        </Button>
      )}
      {liveUrl && (
        <Button asChild size="sm" className="button-hover rounded-[var(--radius-md)]">
          <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="View live demo">
            Live Demo
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      )}
    </div>
  );
}

export const ProjectLinks = memo(ProjectLinksComponent);
