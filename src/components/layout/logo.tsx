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
      className="relative inline-flex items-center rounded-[var(--radius-md)] px-[var(--space-4)] py-[var(--space-4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
    >
      <motion.span
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.96 }}
        animate="rest"
        className="flex items-center text-lg font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]"
      >
        <motion.span
          variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -8, scale: 1.08 } }}
          transition={{ type: "spring", stiffness: 320, damping: 14 }}
          className="inline-block"
        >
          {SITE_INITIALS[0]}
        </motion.span>
        <motion.span
          variants={{
            rest: { color: "var(--color-text-primary)" },
            hover: { color: "var(--color-accent)" },
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {SITE_INITIALS[1]}
        </motion.span>
        <motion.span
          variants={{
            rest: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="ml-[var(--space-8)] h-1 w-1 origin-left rounded-full bg-[var(--color-accent)]"
        />
      </motion.span>
    </Link>
  );
}

export const Logo = memo(LogoComponent);
