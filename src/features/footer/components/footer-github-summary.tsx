"use client";

import { memo } from "react";
import { GitFork, Star, Users, FolderGit2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useGitHub } from "@/features/github/hooks/use-github";
import { GITHUB_DEFAULT_USERNAME } from "@/constants/github";
import { formatCompactNumber, formatRelativeGitHubDate } from "@/features/github/services/github-service";

function FooterGithubSummaryComponent() {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? GITHUB_DEFAULT_USERNAME;
    const { data, isLoading } = useGitHub(username);
    const shouldReduceMotion = useReducedMotion();

    if (isLoading || !data) {
        return (
            <div className="flex flex-col gap-[var(--space-16)]">
                <h3 className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                    GitHub Signal
                </h3>
                <div className="grid gap-[var(--space-12)] grid-cols-2 md:grid-cols-4">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="h-20 animate-pulse rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)]"
                        />
                    ))}
                </div>
            </div>
        );
    }

    const { stats, contributionSummary } = data;

    const summaryCards = [
        {
            icon: FolderGit2,
            label: "Repositories",
            value: formatCompactNumber(stats.repositories),
        },
        {
            icon: Star,
            label: "Total Stars",
            value: formatCompactNumber(contributionSummary.totalStars),
        },
        {
            icon: Users,
            label: "Followers",
            value: formatCompactNumber(stats.followers),
        },
        {
            icon: GitFork,
            label: "Total Forks",
            value: formatCompactNumber(contributionSummary.totalForks),
        },
    ];

    return (
        <div className="flex flex-col gap-[var(--space-16)]">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                    GitHub Signal
                </h3>
                {contributionSummary.latestUpdate && (
                    <span className="text-xs text-[var(--color-text-secondary)]">
                        Active {formatRelativeGitHubDate(contributionSummary.latestUpdate)}
                    </span>
                )}
            </div>

            <div className="grid gap-[var(--space-12)] grid-cols-2 md:grid-cols-4">
                {summaryCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-16)] hover:border-[var(--color-border-strong)] transition-all hover:bg-[var(--color-glass-strong)] shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)] font-medium">
                                    {card.label}
                                </span>
                                <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                            </div>
                            <p className="mt-[var(--space-8)] text-xl font-bold text-[var(--color-text-primary)]">
                                {card.value}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export const FooterGithubSummary = memo(FooterGithubSummaryComponent);
