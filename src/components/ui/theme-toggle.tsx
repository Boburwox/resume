"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-10 w-10 rounded-[12px] bg-[var(--color-glass)] opacity-50"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[12px]",
        "border border-[var(--color-border)] bg-[var(--color-glass)]",
        "transition-all duration-[250ms] hover:border-[var(--color-accent)] hover:shadow-[0_0_8px_var(--color-accent)]/10 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-background)]"
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
            <Moon className="h-5 w-5 text-[var(--color-text-primary)] stroke-[1.5]" />
          ) : (
            <Sun className="h-5 w-5 text-[var(--color-text-primary)] stroke-[1.5]" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
