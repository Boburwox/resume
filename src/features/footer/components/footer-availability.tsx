"use client";

import { memo } from "react";
import { CONTACT_DATA } from "@/data/contact";
import { Sparkles, Globe, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function FooterAvailabilityComponent() {
    const shouldReduceMotion = useReducedMotion();
    const { timezone } = CONTACT_DATA;

    // We can pull custom states or use fields from CONTACT_DATA.availability
    const opportunityItem = CONTACT_DATA.availability.find((item) => item.id === "opportunities");

    const statusItems = [
        {
            icon: Sparkles,
            title: "Opportunities",
            value: opportunityItem?.value ?? "Available",
            description: opportunityItem?.description ?? "Open to new engineering challenges.",
        },
        {
            icon: Globe,
            title: "Timezone",
            value: timezone.timezone,
            description: `${timezone.location} (${timezone.availabilityWindow})`,
        },
        {
            icon: Clock,
            title: "Response Time",
            value: timezone.responseTime,
            description: "Email is the fastest way to get a structured reply.",
        },
    ];

    return (
        <div className="flex flex-col gap-[var(--space-16)]">
            <h3 className="text-sm font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-muted)]">
                Availability
            </h3>
            <div className="grid gap-[var(--space-12)] sm:grid-cols-3">
                {statusItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col gap-[var(--space-8)] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-16)] hover:border-[var(--color-border-strong)] transition-all hover:bg-[var(--color-glass-strong)] shadow-sm"
                        >
                            <div className="flex items-center gap-[var(--space-8)]">
                                <Icon className="h-4 w-4 text-[var(--color-accent)] group-hover:animate-pulse" />
                                <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                                    {item.title}
                                </span>
                            </div>
                            <p className="text-sm font-bold text-[var(--color-text-primary)]">
                                {item.value}
                            </p>
                            <p className="text-xs leading-[var(--leading-relaxed)] text-[var(--color-muted)]">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export const FooterAvailability = memo(FooterAvailabilityComponent);
