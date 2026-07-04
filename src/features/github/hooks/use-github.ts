"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { GITHUB_DEFAULT_USERNAME } from "@/constants/github";
import type { GitHubDashboardData } from "@/types/github";
import { fetchGitHubDashboard } from "@/features/github/services/github-service";

interface GitHubState {
  data: GitHubDashboardData | null;
  error: string | null;
  status: "idle" | "loading" | "success" | "error";
}

export function useGitHub(username = GITHUB_DEFAULT_USERNAME) {
  const normalizedUsername = useMemo(() => username.trim() || GITHUB_DEFAULT_USERNAME, [username]);
  const [state, setState] = useState<GitHubState>({
    data: null,
    error: null,
    status: "idle",
  });

  const loadGitHub = useCallback(
    async (signal?: AbortSignal) => {
      setState((current) => ({
        data: current.data,
        error: null,
        status: "loading",
      }));

      try {
        const data = await fetchGitHubDashboard(normalizedUsername, signal ? { signal } : undefined);
        setState({
          data,
          error: null,
          status: "success",
        });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;

        setState({
          data: null,
          error: error instanceof Error ? error.message : "GitHub data could not be loaded.",
          status: "error",
        });
      }
    },
    [normalizedUsername],
  );

  useEffect(() => {
    const controller = new AbortController();
    queueMicrotask(() => {
      if (!controller.signal.aborted) {
        void loadGitHub(controller.signal);
      }
    });

    return () => controller.abort();
  }, [loadGitHub]);

  const refetch = useCallback(() => {
    void loadGitHub();
  }, [loadGitHub]);

  return {
    data: state.data,
    error: state.error,
    isError: state.status === "error",
    isLoading: state.status === "idle" || state.status === "loading",
    refetch,
    username: normalizedUsername,
  };
}
