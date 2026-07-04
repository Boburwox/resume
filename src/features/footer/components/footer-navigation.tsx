"use client";

import { memo } from "react";
import { RESUME_URL } from "@/constants/navigation";
import { ArrowUpRight } from "lucide-react";

interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

const FOOTER_LINKS: FooterLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Resume", href: RESUME_URL, isExternal: true },
    { label: "Contact", href: "#contact" },
];

function FooterNavigationComponent() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.getElementById(href.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                Navigation
            </h3>
            <nav aria-label="Footer" className="flex flex-col gap-[var(--space-12)]">
                {FOOTER_LINKS.map((link) => {
                    const isExt = link.isExternal;
                    return (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => !isExt && handleScroll(e, link.href)}
                            target={isExt ? "_blank" : undefined}
                            rel={isExt ? "noreferrer" : undefined}
                            className="group flex w-fit items-center gap-[var(--space-4)] text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 rounded-[var(--radius-sm)]"
                        >
                            <span>{link.label}</span>
                            {isExt && (
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            )}
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}

export const FooterNavigation = memo(FooterNavigationComponent);
