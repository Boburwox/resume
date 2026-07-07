"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function NavLinkComponent({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative rounded-[10px] px-[var(--space-16)] py-[var(--space-8)] text-[14px] font-medium tracking-tight transition-all duration-[250ms] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-background)] cursor-pointer select-none",
        isActive
          ? "text-[var(--color-text-primary)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      )}
    >
      <span className="relative z-10">{label}</span>

      {isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          className="absolute inset-0 -z-10 rounded-[10px] bg-[var(--color-glass)] border border-[var(--color-border-strong)] shadow-[var(--shadow-soft)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {!isActive && (
        <motion.span
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="absolute inset-0 -z-10 rounded-[10px] bg-[var(--color-glass)]/40 opacity-0 transition-opacity duration-[var(--duration-fast)]"
        />
      )}
    </a>
  );
}

export const NavLink = memo(NavLinkComponent);
