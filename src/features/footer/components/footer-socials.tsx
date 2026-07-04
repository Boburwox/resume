"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_DATA } from "@/data/contact";
import { ArrowUpRight } from "lucide-react";

function FooterSocialsComponent() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                Connect & Collaborate
            </h3>
            <div className="grid gap-[var(--space-12)] sm:grid-cols-2 lg:grid-cols-4 w-full">
                {CONTACT_DATA.socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <motion.a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                            className="group relative flex items-center justify-between rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-16)] transition-all duration-[var(--duration-fast)] hover:border-[var(--color-accent)] hover:bg-[var(--color-glass-strong)] hover:shadow-md"
                        >
                            <div className="flex items-center gap-[var(--space-12)]">
                                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-[color,border-color] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                                        {social.label}
                                    </span>
                                    <span className="text-[10px] text-[var(--color-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                                        {social.id === "email" ? "Write email" : "View profile"}
                                    </span>
                                </div>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]" />
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
}

export const FooterSocials = memo(FooterSocialsComponent);
