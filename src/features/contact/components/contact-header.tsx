"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ContactData } from "@/types/contact";

interface ContactHeaderProps {
  header: ContactData["header"];
}

function ContactHeaderComponent({ header }: ContactHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-[var(--space-16)]"
    >
      <span className="text-xs font-semibold uppercase tracking-[var(--tracking-wider)] text-[var(--color-accent)]">
        Contact Experience
      </span>
      <h2 className="max-w-4xl text-h2 font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
        {header.title}
      </h2>
      <p className="max-w-3xl text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
        {header.description}
      </p>
    </motion.header>
  );
}

export const ContactHeader = memo(ContactHeaderComponent);
