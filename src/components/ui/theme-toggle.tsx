"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-9 w-9 rounded-[var(--radius-full)] bg-[var(--color-glass)]"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[var(--radius-full)]",
        "border border-[var(--color-border)] bg-[var(--color-glass)]",
        "transition-colors duration-[var(--duration-fast)] hover:border-[var(--color-border-strong)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-[var(--color-text-primary)]" />
          ) : (
            <Sun className="h-4 w-4 text-[var(--color-text-primary)]" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
