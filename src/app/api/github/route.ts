import { NextResponse } from "next/server";
import { GITHUB_DEFAULT_USERNAME, GITHUB_REVALIDATE_SECONDS } from "@/constants/github";
import { createGitHubDashboardData } from "@/features/github/services/github-service";
import { fetchGitHubProfile, fetchGitHubRepositories, GitHubApiError } from "@/lib/github";

const GITHUB_USERNAME_PATTERN = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedUsername = url.searchParams.get("username")?.trim();
  const username = requestedUsername || process.env.NEXT_PUBLIC_GITHUB_USERNAME || GITHUB_DEFAULT_USERNAME;

  if (!GITHUB_USERNAME_PATTERN.test(username)) {
    return NextResponse.json({ message: "GitHub username is invalid." }, { status: 400 });
  }

  try {
    const token = process.env.GITHUB_TOKEN?.trim() || null;
    const [profile, repositories] = await Promise.all([
      fetchGitHubProfile(username, { token }),
      fetchGitHubRepositories(username, { token }),
    ]);
    const data = createGitHubDashboardData(profile, repositories);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": `public, s-maxage=${GITHUB_REVALIDATE_SECONDS}, stale-while-revalidate=${
          GITHUB_REVALIDATE_SECONDS * 6
        }`,
      },
    });
  } catch (error) {
    const status = error instanceof GitHubApiError ? error.status : 500;
    const message = error instanceof Error ? error.message : "GitHub data could not be loaded.";

    return NextResponse.json({ message }, { status });
  }
}
