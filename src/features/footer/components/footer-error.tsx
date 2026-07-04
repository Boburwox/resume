"use client";

import { memo } from "react";
import { AlertCircle, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterErrorProps {
    message?: string | null;
    onRetry?: () => void;
}

function FooterErrorComponent({ message, onRetry }: FooterErrorProps) {
    return (
        <div className="flex w-full items-center justify-center p-[var(--space-24)] rounded-[var(--radius-xl)] border border-[var(--color-danger)]/30 bg-[var(--color-danger)]/5 text-[var(--color-danger)]">
            <div className="flex flex-col items-center gap-[var(--space-12)] text-center">
                <AlertCircle className="h-8 w-8 text-[var(--color-danger)]" aria-hidden="true" />
                <div className="flex flex-col gap-[var(--space-4)]">
                    <p className="text-sm font-semibold">Failed to load footer signals</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                        {message ?? "An unexpected type or network error occurred."}
                    </p>
                </div>
                {onRetry && (
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={onRetry}
                        className="mt-[var(--space-8)] border-[var(--color-danger)]/40 hover:bg-[var(--color-danger)]/10 hover:text-[var(--color-danger)] rounded-[var(--radius-md)] flex items-center gap-[var(--space-4)]"
                    >
                        <RotateCw className="h-3 w-3" />
                        Retry
                    </Button>
                )}
            </div>
        </div>
    );
}

export const FooterError = memo(FooterErrorComponent);
