"use client";

import { memo } from "react";
import { BookMarked, Code2, GitFork, PackageOpen, Star, UserRoundCheck, Users } from "lucide-react";
import { GitHubStatCard } from "@/features/github/components/github-stat-card";
import type { GitHubStats } from "@/types/github";

interface GitHubStatsGridProps {
  stats: GitHubStats;
}

function GitHubStatsGridComponent({ stats }: GitHubStatsGridProps) {
  const items = [
    { icon: BookMarked, label: "Repositories", value: stats.repositories },
    { icon: Users, label: "Followers", value: stats.followers },
    { icon: UserRoundCheck, label: "Following", value: stats.following },
    { icon: Star, label: "Stars", value: stats.stars },
    { icon: GitFork, label: "Forks", value: stats.forks },
    { icon: Code2, label: "Languages", value: stats.languages },
    { icon: PackageOpen, label: "Open Source", value: stats.openSourceProjects },
  ];

  return (
    <section aria-labelledby="github-stats-title" className="flex flex-col gap-[var(--space-20)]">
      <h3 id="github-stats-title" className="sr-only">
        GitHub statistics
      </h3>
      <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <GitHubStatCard key={item.label} icon={item.icon} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
}

export const GitHubStatsGrid = memo(GitHubStatsGridComponent);
