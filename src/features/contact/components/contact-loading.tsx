"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function ContactLoadingComponent() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div role="status" aria-label="Loading contact experience" className="flex flex-col gap-[var(--space-48)] w-full">
            {/* Header Loading Skeleton */}
            <div className="flex flex-col gap-[var(--space-16)] max-w-3xl">
                <div className="h-4 w-24 rounded-[var(--radius-full)] bg-[var(--color-glass)]" />
                <div className="h-10 w-full rounded-[var(--radius-md)] bg-[var(--color-glass)]" />
                <div className="h-6 w-3/4 rounded-[var(--radius-md)] bg-[var(--color-glass)]" />
            </div>

            {/* Grid Content Loading Skeleton */}
            <div className="grid gap-[var(--space-24)] lg:grid-cols-2">
                <div className="flex flex-col gap-[var(--space-24)]">
                    {/* Availability Card Skeleton */}
                    <motion.div
                        {...(shouldReduceMotion ? {} : { animate: { opacity: [0.45, 0.85, 0.45] } })}
                        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
                        className="h-64 rounded-[var(--radius-2xl)] bg-[var(--color-glass)]"
                    />
                    {/* Timezone Card Skeleton */}
                    <motion.div
                        {...(shouldReduceMotion ? {} : { animate: { opacity: [0.45, 0.85, 0.45] } })}
                        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
                        className="h-56 rounded-[var(--radius-2xl)] bg-[var(--color-glass)]"
                    />
                </div>

                {/* Contact Form Skeleton */}
                <motion.div
                    {...(shouldReduceMotion ? {} : { animate: { opacity: [0.45, 0.85, 0.45] } })}
                    transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity, delay: 0.1 }}
                    className="h-full min-h-[500px] rounded-[var(--radius-2xl)] bg-[var(--color-glass)]"
                />
            </div>

            {/* Contact Method Cards Skeleton */}
            <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                        key={index}
                        {...(shouldReduceMotion ? {} : { animate: { opacity: [0.45, 0.85, 0.45] } })}
                        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity, delay: index * 0.1 }}
                        className="h-32 rounded-[var(--radius-xl)] bg-[var(--color-glass)]"
                    />
                ))}
            </div>
        </div>
    );
}

export const ContactLoading = memo(ContactLoadingComponent);
