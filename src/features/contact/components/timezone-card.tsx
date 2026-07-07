"use client";

import { memo, useEffect, useState } from "react";
import { Clock, MapPin, Calendar, MessageSquare } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ContactData } from "@/types/contact";

interface TimezoneCardProps {
    timezone?: ContactData["timezone"];
}

function TimezoneCardComponent({ timezone }: TimezoneCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const tzName = timezone?.timezone?.split(",")?.[0]?.trim() || "Asia/Tashkent";

        const updateClock = () => {
            try {
                const formatted = new Date().toLocaleTimeString("en-US", {
                    timeZone: tzName,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                });
                setTime(formatted);
            } catch {
                setTime(new Date().toLocaleTimeString());
            }
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [timezone?.timezone]);

    return (
        <section aria-labelledby="timezone-title" className="glass rounded-[var(--radius-xl)] p-[var(--space-32)] border border-[var(--color-glass-border)] bg-[var(--color-glass)] shadow-[var(--shadow-glass)]">
            <div className="flex flex-col gap-[var(--space-8)]">
                <h3 id="timezone-title" className="text-h3 font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                    Local Time & Zone
                </h3>
                <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium">
                    Supporting global async scheduling and remote collaborations.
                </p>
            </div>

            <div className="mt-[var(--space-24)] grid gap-[var(--space-16)] sm:grid-cols-2">
                <motion.article
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-between rounded-[16px] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-20)]"
                >
                    <div className="flex items-center gap-[var(--space-8)]">
                        <Clock className="h-5 w-5 text-[var(--color-accent)] animate-pulse stroke-[1.5]" aria-hidden="true" />
                        <span className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)] font-bold">
                            Current Time
                        </span>
                    </div>
                    <div className="mt-[var(--space-16)] min-h-[48px] flex flex-col justify-end">
                        <time className="text-2xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
                            {time || "Loading..."}
                        </time>
                        <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-semibold">{timezone?.timezone || ""}</p>
                    </div>
                </motion.article>

                <motion.article
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-[var(--space-12)] rounded-[16px] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-20)] md:justify-center"
                >
                    <div className="flex items-start gap-[var(--space-12)]">
                        <MapPin className="h-5 w-5 shrink-0 text-[var(--color-accent)] stroke-[1.5]" aria-hidden="true" />
                        <div>
                            <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)] font-bold">Location</p>
                            <p className="text-sm font-bold text-[var(--color-text-primary)]">{timezone?.location || ""}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-[var(--space-12)]">
                        <Calendar className="h-5 w-5 shrink-0 text-[var(--color-accent)] stroke-[1.5]" aria-hidden="true" />
                        <div>
                            <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)] font-bold">Working Hours</p>
                            <p className="text-sm font-bold text-[var(--color-text-primary)]">{timezone?.availabilityWindow || ""}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-[var(--space-12)]">
                        <MessageSquare className="h-5 w-5 shrink-0 text-[var(--color-accent)] stroke-[1.5]" aria-hidden="true" />
                        <div>
                            <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)] font-bold">Response Time</p>
                            <p className="text-sm font-bold text-[var(--color-text-primary)]">{timezone?.responseTime || ""}</p>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}

export const TimezoneCard = memo(TimezoneCardComponent);
