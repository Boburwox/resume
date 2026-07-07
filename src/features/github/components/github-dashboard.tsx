"use client";

import { memo } from "react";
import { ArrowUpRight, CalendarClock, GitFork, Sparkles, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GITHUB_DEFAULT_USERNAME } from "@/constants/github";
import { GitHubAchievements } from "@/features/github/components/github-achievements";
import { GitHubEmpty } from "@/features/github/components/github-empty";
import { GitHubError } from "@/features/github/components/github-error";
import { GitHubLanguageGrid } from "@/features/github/components/github-language-grid";
import { GitHubLoading } from "@/features/github/components/github-loading";
import { GitHubProfile } from "@/features/github/components/github-profile";
import { GitHubRepositories } from "@/features/github/components/github-repositories";
import { GitHubStatsGrid } from "@/features/github/components/github-stats-grid";
import { useGitHub } from "@/features/github/hooks/use-github";
import { formatCompactNumber, formatRelativeGitHubDate } from "@/features/github/services/github-service";

interface GitHubDashboardProps {
  username?: string;
}

function GitHubDashboardComponent({ username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? GITHUB_DEFAULT_USERNAME }: GitHubDashboardProps) {
  const { data, error, isError, isLoading, refetch } = useGitHub(username);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="github" aria-labelledby="github-dashboard-title" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />

      <div className="container relative z-10 flex flex-col gap-[var(--space-48)]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px", once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-[var(--space-12)]"
        >
          <span className="text-xs font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)]">
            GitHub Engineering Dashboard
          </span>
          <div className="flex flex-col gap-[var(--space-16)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2
                id="github-dashboard-title"
                className="text-h2 font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
              >
                Public engineering signal, summarized like an internal dashboard.
              </h2>
              <p className="mt-[var(--space-12)] text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                Live GitHub data transformed into profile quality, repository momentum, language focus, and open-source
                contribution signals.
              </p>
            </div>
            {data && (
              <Button asChild variant="outline" size="lg" className="w-fit cursor-pointer">
                <a href={data.profile.profileUrl} target="_blank" rel="noreferrer">
                  View GitHub
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        {isLoading && !data && <GitHubLoading />}
        {isError && !data && <GitHubError message={error} onRetry={refetch} />}

        {data && (
          <>
            <GitHubProfile profile={data.profile} />
            <GitHubStatsGrid stats={data.stats} />
            <GitHubRepositories
              title="Pinned Repositories"
              description="A weighted selection of public repositories ranked by stars, freshness, and ownership."
              repositories={data.pinnedRepositories}
              featured
            />
            <GitHubRepositories
              title="Repository Grid"
              description="Recently updated owner repositories with topics, links, language, stars, forks, license, and visibility."
              repositories={data.repositories}
            />
            <GitHubLanguageGrid languages={data.languages} />
            <GitHubAchievements achievements={data.achievements} />
            <ContributionSummary data={data} />
            <DashboardCta profileUrl={data.profile.profileUrl} username={data.profile.username} />
          </>
        )}

        {!isLoading && !isError && data?.repositories.length === 0 && (
          <GitHubEmpty description="The profile loaded, but no repositories were returned by GitHub." />
        )}
      </div>
    </section>
  );
}

interface ContributionSummaryProps {
  data: NonNullable<ReturnType<typeof useGitHub>["data"]>;
}

function ContributionSummary({ data }: ContributionSummaryProps) {
  const summary = data.contributionSummary;
  const cards = [
    { icon: CalendarClock, label: "Active Years", value: `${summary.activeYears}+` },
    { icon: Star, label: "Total Stars", value: formatCompactNumber(summary.totalStars) },
    { icon: GitFork, label: "Total Forks", value: formatCompactNumber(summary.totalForks) },
    { icon: Sparkles, label: "Topics", value: formatCompactNumber(summary.totalTopics) },
  ];

  return (
    <section aria-labelledby="github-contribution-title" className="glass rounded-[var(--radius-2xl)] p-[var(--space-24)]">
      <div className="grid gap-[var(--space-24)] lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="flex flex-col gap-[var(--space-8)]">
          <h3
            id="github-contribution-title"
            className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
          >
            Contribution Summary
          </h3>
          <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
            Latest public activity was {formatRelativeGitHubDate(summary.latestUpdate)}. Primary repository language is{" "}
            {summary.mostUsedLanguage ?? "not available"}.
          </p>
          {summary.mostStarredRepository && (
            <a
              href={summary.mostStarredRepository.url}
              target="_blank"
              rel="noreferrer"
              className="mt-[var(--space-8)] inline-flex w-fit items-center gap-[var(--space-8)] text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
            >
              Most starred: {summary.mostStarredRepository.name}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
        <dl className="grid gap-[var(--space-12)] sm:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-16)]"
              >
                <Icon className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                <dd className="mt-[var(--space-12)] text-h4 font-bold text-[var(--color-text-primary)]">{card.value}</dd>
                <dt className="mt-[var(--space-4)] text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">
                  {card.label}
                </dt>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

interface DashboardCtaProps {
  profileUrl: string;
  username: string;
}

function DashboardCta({ profileUrl, username }: DashboardCtaProps) {
  return (
    <section className="glass flex flex-col gap-[var(--space-20)] rounded-[var(--radius-2xl)] p-[var(--space-32)] text-center sm:items-center">
      <h3 className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
        Review the source behind the signal.
      </h3>
      <p className="max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
        Explore @{username} on GitHub for repository history, open-source work, and current engineering experiments.
      </p>
      <Button asChild size="lg" className="w-fit cursor-pointer">
        <a href={profileUrl} target="_blank" rel="noreferrer">
          Open GitHub Profile
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
    </section>
  );
}

export const GitHubDashboard = memo(GitHubDashboardComponent);
