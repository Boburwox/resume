"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SOCIAL_ITEMS } from "@/constants/navigation";

interface SocialLinksProps {
  className?: string;
}

function SocialLinksComponent({ className }: SocialLinksProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("flex items-center gap-[var(--space-16)]", className)}>
      {SOCIAL_ITEMS.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          {...(shouldReduceMotion ? {} : { whileHover: { y: -3, scale: 1.05 }, whileTap: { scale: 0.95 } })}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          <social.icon className="h-4 w-4" />
        </motion.a>
      ))}
    </div>
  );
}

export const SocialLinks = memo(SocialLinksComponent);
