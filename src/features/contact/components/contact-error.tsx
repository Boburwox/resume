"use client";

import { memo } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactErrorProps {
    message?: string;
    onRetry?: () => void;
}

function ContactErrorComponent({
    message = "Something went wrong while loading the contact details. Please try again or reach out through email.",
    onRetry,
}: ContactErrorProps) {
    return (
        <div className="glass flex flex-col items-center gap-[var(--space-20)] rounded-[var(--radius-xl)] p-[var(--space-32)] text-center max-w-lg mx-auto my-[var(--space-48)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-full)] bg-[rgba(245,69,92,0.1)] text-[var(--color-danger)]">
                <AlertCircle className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
                <h3 className="text-body-lg font-semibold text-[var(--color-text-primary)]">
                    Failed to load contact section
                </h3>
                <p className="mt-[var(--space-8)] text-sm text-[var(--color-text-secondary)] leading-[var(--leading-relaxed)]">
                    {message}
                </p>
            </div>

            <div className="flex flex-wrap gap-[var(--space-12)] justify-center">
                {onRetry && (
                    <Button onClick={onRetry} size="sm" className="cursor-pointer">
                        <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                        Try Again
                    </Button>
                )}
                <Button asChild variant="outline" size="sm" className="cursor-pointer">
                    <a href="mailto:hello@example.com">
                        Send Email Directly
                    </a>
                </Button>
            </div>
        </div>
    );
}

export const ContactError = memo(ContactErrorComponent);
