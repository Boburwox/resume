"use client";

import { memo } from "react";
import { SOCIAL_ITEMS } from "@/constants/navigation";

function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-12 text-sm text-[var(--color-text-secondary)]">
            <div className="container flex flex-col sm:flex-row items-center justify-between gap-[var(--space-24)]">
                <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
                    <p className="font-semibold text-[var(--color-text-primary)]">Bobur Xudoyberdiyev</p>
                    <p className="text-xs text-[var(--color-muted)]">Frontend Engineer</p>
                </div>

                <div className="flex items-center gap-[var(--space-20)] select-none">
                    {SOCIAL_ITEMS.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] cursor-pointer"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>

                <p className="text-xs text-[var(--color-muted)]">
                    &copy; {currentYear} BX. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export const Footer = memo(FooterComponent);
