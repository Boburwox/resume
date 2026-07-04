"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        "group relative rounded-[var(--radius-sm)] px-[var(--space-12)] py-[var(--space-8)] text-sm font-medium transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
        isActive
          ? "text-[var(--color-text-primary)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      )}
    >
      <span className="relative z-10">{label}</span>

      <span
        aria-hidden="true"
        className="absolute inset-x-[var(--space-12)] bottom-[4px] h-px origin-left scale-x-0 bg-[var(--color-text-primary)] transition-transform duration-[var(--duration-normal)] ease-[var(--ease-emphasized)] group-hover:scale-x-100"
      />

      {isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          className="absolute inset-x-[var(--space-12)] bottom-[2px] h-[2px] rounded-full bg-[var(--color-accent)]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
    </a>
  );
}

export const NavLink = memo(NavLinkComponent);
