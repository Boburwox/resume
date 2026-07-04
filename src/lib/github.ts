import {
  GITHUB_API_BASE_URL,
  GITHUB_FETCH_TIMEOUT_MS,
  GITHUB_REPOSITORY_PAGE_SIZE,
  GITHUB_REVALIDATE_SECONDS,
} from "@/constants/github";
import type { GitHubApiProfile, GitHubApiRepository, GitHubProfile, GitHubRepository } from "@/types/github";

interface GitHubRequestOptions {
  token: string | null;
}

export class GitHubApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "GitHubApiError";
  }
}

function createHeaders(token: string | null): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-github-dashboard",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function requestGitHub<T>(path: string, options: GitHubRequestOptions): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE_URL}${path}`, {
    headers: createHeaders(options.token),
    next: { revalidate: GITHUB_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(GITHUB_FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new GitHubApiError(createGitHubErrorMessage(response.status), response.status);
  }

  return response.json() as Promise<T>;
}

function createGitHubErrorMessage(status: number) {
  if (status === 404) return "GitHub profile was not found.";
  if (status === 403) return "GitHub API rate limit reached. Add GITHUB_TOKEN to increase the limit.";
  if (status === 401) return "GitHub token is invalid or expired.";

  return "GitHub data could not be loaded.";
}

function normalizeExternalUrl(value: string | null) {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function normalizeVisibility(repository: GitHubApiRepository): GitHubRepository["visibility"] {
  if (repository.visibility === "private" || repository.private) return "private";
  if (repository.visibility === "internal") return "internal";

  return "public";
}

function mapProfile(profile: GitHubApiProfile): GitHubProfile {
  return {
    avatarUrl: profile.avatar_url,
    name: profile.name ?? profile.login,
    username: profile.login,
    bio: profile.bio,
    company: profile.company,
    location: profile.location,
    websiteUrl: normalizeExternalUrl(profile.blog),
    followers: profile.followers,
    following: profile.following,
    publicRepos: profile.public_repos,
    publicGists: profile.public_gists,
    createdAt: profile.created_at,
    profileUrl: profile.html_url,
  };
}

function mapRepository(repository: GitHubApiRepository): GitHubRepository {
  return {
    id: repository.id,
    name: repository.name,
    fullName: repository.full_name,
    description: repository.description,
    htmlUrl: repository.html_url,
    homepageUrl: normalizeExternalUrl(repository.homepage),
    language: repository.language,
    topics: repository.topics ?? [],
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    updatedAt: repository.updated_at,
    licenseName: repository.license?.name ?? null,
    visibility: normalizeVisibility(repository),
    isFork: repository.fork,
    isArchived: repository.archived,
  };
}

export async function fetchGitHubProfile(username: string, options: GitHubRequestOptions) {
  const profile = await requestGitHub<GitHubApiProfile>(`/users/${username}`, options);

  return mapProfile(profile);
}

export async function fetchGitHubRepositories(username: string, options: GitHubRequestOptions) {
  const repositories = await requestGitHub<GitHubApiRepository[]>(
    `/users/${username}/repos?type=owner&sort=updated&direction=desc&per_page=${GITHUB_REPOSITORY_PAGE_SIZE}`,
    options,
  );

  return repositories.map(mapRepository);
}
