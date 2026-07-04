"use client";

import { memo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { ContactFaqItem } from "@/types/contact";

interface ContactFaqProps {
    items: ContactFaqItem[];
}

function ContactFaqComponent({ items }: ContactFaqProps) {
    const shouldReduceMotion = useReducedMotion();
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((current) => (current === id ? null : id));
    };

    return (
        <section aria-labelledby="faq-section-title" className="flex flex-col gap-[var(--space-24)]">
            <div>
                <h3 id="faq-section-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
                    Frequently Asked Questions
                </h3>
                <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                    Quick answers to common questions about communication structure, work availability, and collaboration.
                </p>
            </div>

            <div className="grid gap-[var(--space-12)]">
                {items.map((item, index) => {
                    const isExpanded = expandedId === item.id;
                    const buttonId = `faq-btn-${item.id}`;
                    const contentId = `faq-content-${item.id}`;

                    return (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className="glass overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]"
                        >
                            <button
                                id={buttonId}
                                type="button"
                                aria-expanded={isExpanded}
                                aria-controls={contentId}
                                onClick={() => toggleExpand(item.id)}
                                className="flex w-full items-center justify-between gap-[var(--space-16)] px-[var(--space-20)] py-[var(--space-20)] text-left font-semibold text-[var(--color-text-primary)] outline-none hover:bg-[var(--color-glass)] focus-visible:bg-[var(--color-glass)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)] cursor-pointer"
                            >
                                <span>{item.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-[var(--color-muted)] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {isExpanded && (
                                    <motion.div
                                        id={contentId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                                        animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                                        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="border-t border-[var(--color-border)] px-[var(--space-20)] py-[var(--space-16)] text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                                            <p>{item.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}

export const ContactFaq = memo(ContactFaqComponent);
