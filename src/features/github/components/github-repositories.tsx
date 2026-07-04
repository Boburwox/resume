"use client";

import { memo } from "react";
import { GitHubEmpty } from "@/features/github/components/github-empty";
import { GitHubRepositoryCard } from "@/features/github/components/github-repository-card";
import type { GitHubRepository } from "@/types/github";

interface GitHubRepositoriesProps {
  title: string;
  description: string;
  repositories: GitHubRepository[];
  featured?: boolean;
}

function GitHubRepositoriesComponent({ title, description, repositories, featured = false }: GitHubRepositoriesProps) {
  return (
    <section aria-labelledby={`${title.replaceAll(" ", "-").toLowerCase()}-title`} className="flex flex-col gap-[var(--space-24)]">
      <div className="flex flex-col gap-[var(--space-8)]">
        <h3
          id={`${title.replaceAll(" ", "-").toLowerCase()}-title`}
          className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
        >
          {title}
        </h3>
        <p className="max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>

      {repositories.length > 0 ? (
        <div className="grid gap-[var(--space-24)] sm:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repository) => (
            <GitHubRepositoryCard key={repository.id} repository={repository} featured={featured} />
          ))}
        </div>
      ) : (
        <GitHubEmpty description="This GitHub profile does not have repositories for this section yet." />
      )}
    </section>
  );
}

export const GitHubRepositories = memo(GitHubRepositoriesComponent);
