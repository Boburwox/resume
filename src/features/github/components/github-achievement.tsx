"use client";

import { memo } from "react";
import { Award, BrainCircuit, Code2, GitPullRequest, MonitorSmartphone, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { GitHubAchievement as GitHubAchievementData } from "@/types/github";

const ACHIEVEMENT_ICONS: Record<GitHubAchievementData["id"], LucideIcon> = {
  "ai-builder": BrainCircuit,
  "continuous-learner": Rocket,
  "frontend-specialist": MonitorSmartphone,
  "nextjs-engineer": Code2,
  "open-source-contributor": GitPullRequest,
  "typescript-developer": Award,
};

interface GitHubAchievementProps {
  achievement: GitHubAchievementData;
}

function GitHubAchievementComponent({ achievement }: GitHubAchievementProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = ACHIEVEMENT_ICONS[achievement.id];

  return (
    <motion.li
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ margin: "-80px", once: true }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-16)]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)]">
        <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col gap-[var(--space-4)]">
        <span className="font-semibold text-[var(--color-text-primary)]">{achievement.title}</span>
        <span className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          {achievement.description}
        </span>
      </span>
    </motion.li>
  );
}

export const GitHubAchievement = memo(GitHubAchievementComponent);
