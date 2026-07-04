"use client";

import { memo } from "react";
import { GitHubEmpty } from "@/features/github/components/github-empty";
import { GitHubLanguageCard } from "@/features/github/components/github-language-card";
import type { GitHubLanguageSummary } from "@/types/github";

interface GitHubLanguageGridProps {
  languages: GitHubLanguageSummary[];
}

function GitHubLanguageGridComponent({ languages }: GitHubLanguageGridProps) {
  return (
    <section aria-labelledby="github-languages-title" className="flex flex-col gap-[var(--space-24)]">
      <div className="flex flex-col gap-[var(--space-8)]">
        <h3
          id="github-languages-title"
          className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
        >
          Language Analytics
        </h3>
        <p className="max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Repository language distribution ranked by usage, with stars and forks included for signal quality.
        </p>
      </div>

      {languages.length > 0 ? (
        <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-4">
          {languages.slice(0, 8).map((language, index) => (
            <GitHubLanguageCard key={language.language} language={language} rank={index + 1} />
          ))}
        </div>
      ) : (
        <GitHubEmpty
          title="No language data available"
          description="GitHub did not return a primary language for the public repositories."
        />
      )}
    </section>
  );
}

export const GitHubLanguageGrid = memo(GitHubLanguageGridComponent);
