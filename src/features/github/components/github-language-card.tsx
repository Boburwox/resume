"use client";

import { memo } from "react";
import { Code2, GitFork, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { GitHubLanguageSummary } from "@/types/github";
import { formatCompactNumber } from "@/features/github/services/github-service";

interface GitHubLanguageCardProps {
  language: GitHubLanguageSummary;
  rank: number;
}

function GitHubLanguageCardComponent({ language, rank }: GitHubLanguageCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...(!shouldReduceMotion ? { whileHover: { y: -4 } } : {})}
      viewport={{ margin: "-80px", once: true }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex min-h-44 flex-col justify-between rounded-[var(--radius-xl)] p-[var(--space-20)]"
    >
      <div className="flex items-start justify-between gap-[var(--space-16)]">
        <div className="flex min-w-0 items-center gap-[var(--space-12)]">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)]">
            <Code2 className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h4 className="truncate text-body-lg font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
              {language.language}
            </h4>
            <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">Rank {rank}</p>
          </div>
        </div>
        <span className="text-h4 font-bold text-[var(--color-text-primary)]">{language.percentage}%</span>
      </div>

      <div className="grid grid-cols-3 gap-[var(--space-8)] text-xs text-[var(--color-text-secondary)]">
        <Metric label="Repos" value={formatCompactNumber(language.repositories)} />
        <Metric icon={Star} label="Stars" value={formatCompactNumber(language.stars)} />
        <Metric icon={GitFork} label="Forks" value={formatCompactNumber(language.forks)} />
      </div>
    </motion.article>
  );
}

interface MetricProps {
  icon?: typeof Star;
  label: string;
  value: string;
}

function Metric({ icon: Icon, label, value }: MetricProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-8)]">
      <span className="flex items-center gap-[var(--space-4)] font-semibold text-[var(--color-text-primary)]">
        {Icon && <Icon className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />}
        {value}
      </span>
      <span className="mt-[var(--space-4)] block text-[10px] uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  );
}

export const GitHubLanguageCard = memo(GitHubLanguageCardComponent);
