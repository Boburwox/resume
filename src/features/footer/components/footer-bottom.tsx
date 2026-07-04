"use client";

import { memo } from "react";
import { SITE_INITIALS } from "@/constants/navigation";

function FooterBottomComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col gap-[var(--space-16)] border-t border-[var(--color-border)] pt-[var(--space-24)] text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex flex-col gap-[var(--space-4)]">
                <p className="text-xs text-[var(--color-muted)]">
                    &copy; {currentYear} {SITE_INITIALS}. All rights reserved.
                </p>
                <p className="text-[10px] text-[var(--color-muted)] font-mono">
                    [Build version: 0.1.0-alpha] // Mode: Production-grade client static prerender.
                </p>
            </div>
            <div className="flex flex-col gap-[var(--space-4)] sm:items-end">
                <p className="text-xs text-[var(--color-text-secondary)]">
                    Built with <span className="text-[var(--color-danger)]">❤️</span> using Next.js & Tailwind CSS.
                </p>
                <p className="text-[10px] text-[var(--color-muted)]">
                    Designed with system tokens & accessible UX guidelines.
                </p>
            </div>
        </div>
    );
}

export const FooterBottom = memo(FooterBottomComponent);
