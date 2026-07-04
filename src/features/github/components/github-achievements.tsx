"use client";

import { memo } from "react";
import { GitHubAchievement } from "@/features/github/components/github-achievement";
import { GitHubEmpty } from "@/features/github/components/github-empty";
import type { GitHubAchievement as GitHubAchievementType } from "@/types/github";

interface GitHubAchievementsProps {
  achievements: GitHubAchievementType[];
}

function GitHubAchievementsComponent({ achievements }: GitHubAchievementsProps) {
  return (
    <section aria-labelledby="github-achievements-title" className="flex flex-col gap-[var(--space-24)]">
      <div className="flex flex-col gap-[var(--space-8)]">
        <h3
          id="github-achievements-title"
          className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
        >
          Achievements
        </h3>
        <p className="max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Generated from public repository signals, language usage, and shipping history.
        </p>
      </div>

      {achievements.length > 0 ? (
        <ul className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <GitHubAchievement key={achievement.id} achievement={achievement} />
          ))}
        </ul>
      ) : (
        <GitHubEmpty
          title="No achievements generated"
          description="Achievements will appear once repository language and topic signals are available."
        />
      )}
    </section>
  );
}

export const GitHubAchievements = memo(GitHubAchievementsComponent);
