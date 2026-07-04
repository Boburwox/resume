import { memo } from "react";

function FooterLoadingComponent() {
    return (
        <footer className="relative w-full border-t border-[var(--color-border)] bg-[var(--color-glass)]/20 py-[var(--space-48)] md:py-[var(--space-64)]">
            <div className="container flex flex-col gap-[var(--space-40)]">
                {/* Hero Section Skeleton */}
                <div className="flex flex-col gap-[var(--space-16)]">
                    <div className="h-4 w-24 rounded bg-[var(--color-border)] animate-pulse" />
                    <div className="h-12 w-3/4 rounded bg-[var(--color-border)] animate-pulse" />
                    <div className="h-6 w-1/2 rounded bg-[var(--color-border)] animate-pulse" />
                </div>

                {/* Mid Grid Skeleton */}
                <div className="grid gap-[var(--space-32)] md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-[var(--space-12)]">
                        <div className="h-4 w-20 rounded bg-[var(--color-border)] animate-pulse" />
                        <div className="h-8 w-full rounded bg-[var(--color-border)] animate-pulse" />
                        <div className="h-8 w-full rounded bg-[var(--color-border)] animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-[var(--space-12)]">
                        <div className="h-4 w-20 rounded bg-[var(--color-border)] animate-pulse" />
                        <div className="flex flex-wrap gap-[var(--space-8)]">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-6 w-16 rounded-full bg-[var(--color-border)] animate-pulse" />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[var(--space-12)]">
                        <div className="h-4 w-24 rounded bg-[var(--color-border)] animate-pulse" />
                        <div className="grid grid-cols-2 gap-[var(--space-8)]">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-10 rounded bg-[var(--color-border)] animate-pulse" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Skeleton */}
                <div className="flex justify-between border-t border-[var(--color-border)] pt-[var(--space-24)]">
                    <div className="h-4 w-40 rounded bg-[var(--color-border)] animate-pulse" />
                    <div className="h-4 w-32 rounded bg-[var(--color-border)] animate-pulse" />
                </div>
            </div>
        </footer>
    );
}

export const FooterLoading = memo(FooterLoadingComponent);
