"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SOCIAL_ITEMS } from "@/constants/navigation";

interface SocialLinksProps {
  className?: string;
}

function SocialLinksComponent({ className }: SocialLinksProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("flex flex-wrap items-center gap-[var(--space-12)]", className)}>
      {SOCIAL_ITEMS.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          {...(shouldReduceMotion ? {} : { whileHover: { y: -3, scale: 1.05 }, whileTap: { scale: 0.96 } })}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-[var(--color-glass)] transition-all duration-[250ms] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
        >
          <social.icon className="h-5 w-5 stroke-[1.5]" />
        </motion.a>
      ))}
    </div>
  );
}

export const SocialLinks = memo(SocialLinksComponent);
