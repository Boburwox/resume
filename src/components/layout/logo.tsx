"use client";

import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { SITE_INITIALS } from "@/constants/navigation";

function LogoComponent() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="relative inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-background)]"
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-[var(--space-12)]"
      >
        {/* Monogram BX Emblem */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(255,255,255,0.08)] dark:border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] dark:bg-[rgba(255,255,255,0.02)] shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-[250ms] group-hover:border-[var(--color-border-strong)]">
          <span className="text-sm font-extrabold tracking-[-0.04em] text-[var(--color-text-primary)] select-none">
            <motion.span
              variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -6, scale: 1.05 } }}
              transition={{ type: "spring", stiffness: 350, damping: 14 }}
              className="inline-block text-[var(--color-text-primary)]"
            >
              {SITE_INITIALS[0]}
            </motion.span>
            <motion.span
              variants={{
                rest: { color: "var(--color-text-primary)" },
                hover: { color: "var(--color-accent)" },
              }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-[var(--color-accent)]"
            >
              {SITE_INITIALS[1]}
            </motion.span>
          </span>
          {/* Subtle online signal dot */}
          <div
            aria-hidden="true"
            className="absolute bottom-[3px] right-[3px] h-1.5 w-1.5 rounded-full bg-[var(--color-success)] shadow-[0_0_8px_var(--color-success)]"
          />
        </div>

        {/* Logo Text Label */}
        <span className="hidden text-[14px] font-bold tracking-tight text-[var(--color-text-primary)] sm:block select-none">
          Bobur <span className="text-[var(--color-accent)] font-medium">bx.</span>
        </span>
      </motion.div>
    </Link>
  );
}

export const Logo = memo(LogoComponent);
