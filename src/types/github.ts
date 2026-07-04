export type GitHubRepositoryVisibility = "public" | "private" | "internal";

export type GitHubAchievementId =
  | "open-source-contributor"
  | "typescript-developer"
  | "nextjs-engineer"
  | "ai-builder"
  | "frontend-specialist"
  | "continuous-learner";

export interface GitHubProfile {
  avatarUrl: string;
  name: string;
  username: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  websiteUrl: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  createdAt: string;
  profileUrl: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepageUrl: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  updatedAt: string;
  licenseName: string | null;
  visibility: GitHubRepositoryVisibility;
  isFork: boolean;
  isArchived: boolean;
}

export interface GitHubStats {
  repositories: number;
  followers: number;
  following: number;
  stars: number;
  forks: number;
  languages: number;
  openSourceProjects: number;
}

export interface GitHubLanguageSummary {
  language: string;
  repositories: number;
  stars: number;
  forks: number;
  percentage: number;
}

export interface GitHubAchievement {
  id: GitHubAchievementId;
  title: string;
  description: string;
}

export interface GitHubContributionSummary {
  activeYears: number;
  totalForks: number;
  totalStars: number;
  totalTopics: number;
  latestUpdate: string | null;
  mostUsedLanguage: string | null;
  mostStarredRepository: {
    name: string;
    stars: number;
    url: string;
  } | null;
}

export interface GitHubDashboardData {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  pinnedRepositories: GitHubRepository[];
  languages: GitHubLanguageSummary[];
  achievements: GitHubAchievement[];
  stats: GitHubStats;
  contributionSummary: GitHubContributionSummary;
}

export interface GitHubApiProfile {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
  login: string;
  name: string | null;
  public_gists: number;
  public_repos: number;
}

export interface GitHubApiRepository {
  archived: boolean;
  description: string | null;
  fork: boolean;
  forks_count: number;
  full_name: string;
  homepage: string | null;
  html_url: string;
  id: number;
  language: string | null;
  license: {
    name: string;
  } | null;
  name: string;
  private: boolean;
  stargazers_count: number;
  topics?: string[];
  updated_at: string;
  visibility?: string;
}
