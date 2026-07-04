"use client";

import { memo } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubErrorProps {
  message: string | null;
  onRetry: () => void;
}

function GitHubErrorComponent({ message, onRetry }: GitHubErrorProps) {
  return (
    <div className="glass flex flex-col items-start gap-[var(--space-20)] rounded-[var(--radius-2xl)] p-[var(--space-32)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)]">
        <AlertCircle className="h-5 w-5 text-[var(--color-danger)]" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-[var(--space-8)]">
        <h3 className="text-h4 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          GitHub data is temporarily unavailable
        </h3>
        <p className="max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          {message ?? "The dashboard could not load the latest repository data."}
        </p>
      </div>
      <Button type="button" variant="outline" onClick={onRetry} className="button-hover rounded-[var(--radius-md)]">
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        Retry
      </Button>
    </div>
  );
}

export const GitHubError = memo(GitHubErrorComponent);
