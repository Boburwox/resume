import {
  GITHUB_ACHIEVEMENT_COPY,
  GITHUB_PINNED_REPOSITORY_COUNT,
  GITHUB_REPOSITORY_DISPLAY_LIMIT,
} from "@/constants/github";
import type {
  GitHubAchievement,
  GitHubAchievementId,
  GitHubContributionSummary,
  GitHubDashboardData,
  GitHubLanguageSummary,
  GitHubProfile,
  GitHubRepository,
  GitHubStats,
} from "@/types/github";

const FRONTEND_SIGNALS = ["frontend", "react", "next", "nextjs", "tailwind", "ui", "css", "web"];
const AI_SIGNALS = ["ai", "openai", "llm", "gpt", "chatgpt", "machine-learning", "ml"];
const NEXT_SIGNALS = ["next", "nextjs", "next.js", "next-js"];

export async function fetchGitHubDashboard(username: string, init?: RequestInit) {
  const params = new URLSearchParams({ username });
  const headers = new Headers(init?.headers);
  headers.set("Accept", "application/json");

  const response = await fetch(`/api/github?${params.toString()}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const message = await readErrorMessage(response);
    throw new Error(message);
  }

  return response.json() as Promise<GitHubDashboardData>;
}

export function createGitHubDashboardData(
  profile: GitHubProfile,
  repositories: GitHubRepository[],
): GitHubDashboardData {
  const sortedRepositories = [...repositories].sort(sortByUpdatedAt);
  const languages = createLanguageSummary(repositories);
  const stats = createStats(profile, repositories, languages);

  return {
    profile,
    repositories: sortedRepositories.slice(0, GITHUB_REPOSITORY_DISPLAY_LIMIT),
    pinnedRepositories: createPinnedRepositories(sortedRepositories),
    languages,
    achievements: createAchievements(profile, repositories, languages),
    stats,
    contributionSummary: createContributionSummary(profile, repositories, languages),
  };
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en", {
    compactDisplay: "short",
    maximumFractionDigits: 1,
    notation: "compact",
  }).format(value);
}

export function formatGitHubDate(value: string | null) {
  if (!value) return "Not available";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not available";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatRelativeGitHubDate(value: string | null) {
  if (!value) return "No recent updates";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "No recent updates";

  const secondsFromNow = Math.round((date.getTime() - Date.now()) / 1000);
  const ranges: Array<{ unit: Intl.RelativeTimeFormatUnit; seconds: number }> = [
    { unit: "year", seconds: 31_536_000 },
    { unit: "month", seconds: 2_592_000 },
    { unit: "week", seconds: 604_800 },
    { unit: "day", seconds: 86_400 },
    { unit: "hour", seconds: 3_600 },
    { unit: "minute", seconds: 60 },
  ];
  const range = ranges.find((item) => Math.abs(secondsFromNow) >= item.seconds) ?? {
    unit: "second" as const,
    seconds: 1,
  };

  return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
    Math.round(secondsFromNow / range.seconds),
    range.unit,
  );
}

async function readErrorMessage(response: Response) {
  try {
    const payload = (await response.json()) as { message?: string };
    return payload.message ?? "GitHub data could not be loaded.";
  } catch {
    return "GitHub data could not be loaded.";
  }
}

function createStats(
  profile: GitHubProfile,
  repositories: GitHubRepository[],
  languages: GitHubLanguageSummary[],
): GitHubStats {
  return {
    repositories: profile.publicRepos,
    followers: profile.followers,
    following: profile.following,
    stars: repositories.reduce((total, repository) => total + repository.stars, 0),
    forks: repositories.reduce((total, repository) => total + repository.forks, 0),
    languages: languages.length,
    openSourceProjects: repositories.filter((repository) => repository.visibility === "public" && !repository.isFork)
      .length,
  };
}

function createPinnedRepositories(repositories: GitHubRepository[]) {
  const candidates = repositories.filter((repository) => !repository.isFork && !repository.isArchived);
  const source = candidates.length > 0 ? candidates : repositories;

  return [...source]
    .sort((a, b) => {
      if (b.stars !== a.stars) return b.stars - a.stars;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    })
    .slice(0, GITHUB_PINNED_REPOSITORY_COUNT);
}

function createLanguageSummary(repositories: GitHubRepository[]): GitHubLanguageSummary[] {
  const languageMap = new Map<string, Omit<GitHubLanguageSummary, "percentage">>();

  repositories.forEach((repository) => {
    if (!repository.language) return;

    const existing = languageMap.get(repository.language);
    if (existing) {
      languageMap.set(repository.language, {
        language: repository.language,
        repositories: existing.repositories + 1,
        stars: existing.stars + repository.stars,
        forks: existing.forks + repository.forks,
      });
      return;
    }

    languageMap.set(repository.language, {
      language: repository.language,
      repositories: 1,
      stars: repository.stars,
      forks: repository.forks,
    });
  });

  const totalRepositories = [...languageMap.values()].reduce((total, item) => total + item.repositories, 0);

  return [...languageMap.values()]
    .map((item) => ({
      ...item,
      percentage: totalRepositories > 0 ? Math.round((item.repositories / totalRepositories) * 100) : 0,
    }))
    .sort((a, b) => {
      if (b.repositories !== a.repositories) return b.repositories - a.repositories;
      return b.stars - a.stars;
    });
}

function createAchievements(
  profile: GitHubProfile,
  repositories: GitHubRepository[],
  languages: GitHubLanguageSummary[],
): GitHubAchievement[] {
  const repositoryText = createRepositorySearchText(repositories);
  const languageNames = new Set(languages.map((item) => item.language.toLowerCase()));
  const activeYears = calculateActiveYears(profile.createdAt);
  const achievementIds: GitHubAchievementId[] = [];

  if (repositories.some((repository) => repository.visibility === "public" && !repository.isFork)) {
    achievementIds.push("open-source-contributor");
  }

  if (languageNames.has("typescript") || repositoryText.includes("typescript")) {
    achievementIds.push("typescript-developer");
  }

  if (hasSignal(repositoryText, NEXT_SIGNALS)) {
    achievementIds.push("nextjs-engineer");
  }

  if (hasSignal(repositoryText, AI_SIGNALS)) {
    achievementIds.push("ai-builder");
  }

  if (hasSignal(repositoryText, FRONTEND_SIGNALS) || languageNames.has("javascript") || languageNames.has("css")) {
    achievementIds.push("frontend-specialist");
  }

  if (activeYears >= 1 || repositories.length > 0) {
    achievementIds.push("continuous-learner");
  }

  return achievementIds.map((id) => ({
    id,
    ...GITHUB_ACHIEVEMENT_COPY[id],
  }));
}

function createContributionSummary(
  profile: GitHubProfile,
  repositories: GitHubRepository[],
  languages: GitHubLanguageSummary[],
): GitHubContributionSummary {
  const sortedRepositories = [...repositories].sort(sortByUpdatedAt);
  const mostStarredRepository = [...repositories].sort((a, b) => b.stars - a.stars)[0] ?? null;
  const uniqueTopics = new Set(repositories.flatMap((repository) => repository.topics));

  return {
    activeYears: calculateActiveYears(profile.createdAt),
    totalForks: repositories.reduce((total, repository) => total + repository.forks, 0),
    totalStars: repositories.reduce((total, repository) => total + repository.stars, 0),
    totalTopics: uniqueTopics.size,
    latestUpdate: sortedRepositories[0]?.updatedAt ?? null,
    mostUsedLanguage: languages[0]?.language ?? null,
    mostStarredRepository: mostStarredRepository
      ? {
          name: mostStarredRepository.name,
          stars: mostStarredRepository.stars,
          url: mostStarredRepository.htmlUrl,
        }
      : null,
  };
}

function calculateActiveYears(createdAt: string) {
  const createdDate = new Date(createdAt);
  if (Number.isNaN(createdDate.getTime())) return 0;

  const diff = Date.now() - createdDate.getTime();
  return Math.max(1, Math.ceil(diff / 31_536_000_000));
}

function createRepositorySearchText(repositories: GitHubRepository[]) {
  return repositories
    .map((repository) =>
      [repository.name, repository.description, repository.language, ...repository.topics].filter(Boolean).join(" "),
    )
    .join(" ")
    .toLowerCase();
}

function hasSignal(value: string, signals: string[]) {
  return signals.some((signal) => value.includes(signal));
}

function sortByUpdatedAt(a: GitHubRepository, b: GitHubRepository) {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
}
