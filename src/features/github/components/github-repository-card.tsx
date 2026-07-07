"use client";

import { memo } from "react";
import { ArrowUpRight, GitFork, Globe2, LockKeyhole, Scale, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { GitHubRepository } from "@/types/github";
import { formatCompactNumber, formatRelativeGitHubDate } from "@/features/github/services/github-service";
import { Button } from "@/components/ui/button";

interface GitHubRepositoryCardProps {
  repository: GitHubRepository;
  featured?: boolean;
}

function GitHubRepositoryCardComponent({ repository, featured = false }: GitHubRepositoryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const visibleTopics = repository.topics.slice(0, featured ? 5 : 4);

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...(!shouldReduceMotion ? { whileHover: { y: -6 } } : {})}
      viewport={{ margin: "-80px", once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass flex h-full flex-col gap-[var(--space-24)] rounded-[var(--radius-xl)] p-[var(--space-24)] transition-shadow duration-[var(--duration-normal)] hover:shadow-[var(--shadow-large)] border border-[var(--color-glass-border)] bg-[var(--color-glass)]",
        featured && "p-[var(--space-32)]",
      )}
    >
      <div className="flex items-start justify-between gap-[var(--space-16)]">
        <div className="min-w-0">
          <h4 className="break-words text-body-lg font-bold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
            {repository.name}
          </h4>
          <div className="mt-[var(--space-8)] flex flex-wrap items-center gap-[var(--space-8)] text-xs text-[var(--color-muted)] font-medium">
            {repository.language && <span>{repository.language}</span>}
            <span className="inline-flex items-center gap-[var(--space-4)]">
              {repository.visibility === "public" ? (
                <Globe2 className="h-[18px] w-[18px] stroke-[1.5]" aria-hidden="true" />
              ) : (
                <LockKeyhole className="h-[18px] w-[18px] stroke-[1.5]" aria-hidden="true" />
              )}
              {repository.visibility}
            </span>
          </div>
        </div>

        <a
          href={repository.htmlUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${repository.name} repository`}
          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-text-primary)] transition-transform duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <ArrowUpRight className="h-[18px] w-[18px] stroke-[1.5]" aria-hidden="true" />
        </a>
      </div>

      <p className="min-h-12 text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium">
        {repository.description ?? "A public GitHub repository maintained as part of the engineering portfolio."}
      </p>

      {visibleTopics.length > 0 && (
        <ul className="flex flex-wrap gap-[var(--space-8)]" aria-label={`${repository.name} repository topics`}>
          {visibleTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-[10px] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-6)] text-xs font-semibold text-[var(--color-text-secondary)]"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-[var(--space-12)] text-xs text-[var(--color-muted)] font-medium">
        <span className="inline-flex items-center gap-[var(--space-4)]">
          <Star className="h-[18px] w-[18px] text-[var(--color-warning)] stroke-[1.5]" aria-hidden="true" />
          {formatCompactNumber(repository.stars)}
        </span>
        <span className="inline-flex items-center gap-[var(--space-4)]">
          <GitFork className="h-[18px] w-[18px] text-[var(--color-accent)] stroke-[1.5]" aria-hidden="true" />
          {formatCompactNumber(repository.forks)}
        </span>
        {repository.licenseName && (
          <span className="inline-flex items-center gap-[var(--space-4)]">
            <Scale className="h-[18px] w-[18px] stroke-[1.5]" aria-hidden="true" />
            {repository.licenseName}
          </span>
        )}
        <span>{formatRelativeGitHubDate(repository.updatedAt)}</span>
      </div>

      <div className="grid gap-[var(--space-8)] sm:grid-cols-2">
        <RepositoryAction href={repository.htmlUrl} label="Repository" />
        {repository.homepageUrl && <RepositoryAction href={repository.homepageUrl} label="Live Demo" />}
      </div>
    </motion.article>
  );
}

interface RepositoryActionProps {
  href: string;
  label: string;
}

function RepositoryAction({ href, label }: RepositoryActionProps) {
  return (
    <Button asChild variant="outline" size="sm" className="w-full">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {label}
        <ArrowUpRight className="h-[18px] w-[18px] inline-block align-middle stroke-[1.5] ml-1.5" aria-hidden="true" />
      </a>
    </Button>
  );
}

export const GitHubRepositoryCard = memo(GitHubRepositoryCardComponent);
