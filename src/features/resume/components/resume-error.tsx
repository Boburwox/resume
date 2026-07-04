"use client";

import { memo } from "react";
import { AlertCircle } from "lucide-react";

interface ResumeErrorProps {
  message?: string;
}

function ResumeErrorComponent({ message = "Resume data could not be displayed." }: ResumeErrorProps) {
  return (
    <div className="glass flex items-start gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-24)]">
      <AlertCircle className="h-5 w-5 shrink-0 text-[var(--color-danger)]" aria-hidden="true" />
      <div>
        <h3 className="font-semibold text-[var(--color-text-primary)]">Resume unavailable</h3>
        <p className="mt-[var(--space-4)] text-sm text-[var(--color-text-secondary)]">{message}</p>
      </div>
    </div>
  );
}

export const ResumeError = memo(ResumeErrorComponent);
