"use client";

import { memo } from "react";
import { ArrowRight, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ContactData } from "@/types/contact";

interface ContactCtaProps {
    cta: ContactData["cta"];
}

function ContactCtaComponent({ cta }: ContactCtaProps) {
    const shouldReduceMotion = useReducedMotion();
    const cleanedDescription = cta.description.replace(/&apos;/g, "'");

    return (
        <motion.section
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-32)] md:p-[var(--space-48)] text-center flex flex-col items-center gap-[var(--space-16)]"
        >
            <div
                aria-hidden="true"
                className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-[var(--blur-glass)]"
            />

            <h3 className="relative z-10 text-h2 font-bold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
                {cta.title}
            </h3>
            <p className="relative z-10 max-w-2xl text-body leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                {cleanedDescription}
            </p>

            <Button asChild size="lg" className="button-hover relative z-10 mt-[var(--space-8)] rounded-[var(--radius-md)]">
                <a href={cta.href} className="cursor-pointer">
                    <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                    {cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
            </Button>
        </motion.section>
    );
}

export const ContactCta = memo(ContactCtaComponent);
