import type { GitHubAchievementId } from "@/types/github";

export const GITHUB_DEFAULT_USERNAME = "Boburwox";
export const GITHUB_API_BASE_URL = "https://api.github.com";
export const GITHUB_REVALIDATE_SECONDS = 300;
export const GITHUB_FETCH_TIMEOUT_MS = 10_000;
export const GITHUB_REPOSITORY_PAGE_SIZE = 100;
export const GITHUB_PINNED_REPOSITORY_COUNT = 3;
export const GITHUB_REPOSITORY_DISPLAY_LIMIT = 9;

export const GITHUB_ACHIEVEMENT_COPY: Record<
  GitHubAchievementId,
  {
    title: string;
    description: string;
  }
> = {
  "open-source-contributor": {
    title: "Open Source Contributor",
    description: "Maintains public repositories with reusable engineering work.",
  },
  "typescript-developer": {
    title: "TypeScript Developer",
    description: "Ships strongly typed frontend and full-stack systems.",
  },
  "nextjs-engineer": {
    title: "Next.js Engineer",
    description: "Builds production interfaces on modern React infrastructure.",
  },
  "ai-builder": {
    title: "AI Builder",
    description: "Explores applied AI products, workflows, and developer tools.",
  },
  "frontend-specialist": {
    title: "Frontend Specialist",
    description: "Focuses on accessible, polished, high-performance interfaces.",
  },
  "continuous-learner": {
    title: "Continuous Learner",
    description: "Keeps a visible history of iteration and active shipping.",
  },
};
