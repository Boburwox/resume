"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { NavLink } from "@/components/layout/nav-link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_ITEMS, RESUME_URL } from "@/constants/navigation";

const SCROLL_THRESHOLD = 20;

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeId = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="fixed inset-x-0 top-0 z-40 w-full"
      >
        <div
          style={{
            backdropFilter: "blur(var(--blur-nav))",
            WebkitBackdropFilter: "blur(var(--blur-nav))",
          }}
          className={cn(
            "mx-auto flex h-[76px] w-full items-center justify-between px-[var(--space-24)] transition-all duration-[var(--duration-normal)] ease-out border-b md:px-[var(--space-32)]",
            isScrolled
              ? "border-[rgba(255,255,255,0.08)] bg-[var(--color-background)]/80 shadow-[var(--shadow-large)]"
              : "border-transparent bg-transparent shadow-none"
          )}
        >
          <div className="flex items-center gap-[var(--space-20)]">
            <Logo />
          </div>

          <LayoutGroup id="navbar">
            <nav aria-label="Primary" className="hidden items-center gap-1.5 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.id} href={item.href} label={item.label} isActive={activeId === item.id} />
              ))}
            </nav>
          </LayoutGroup>

          <div className="flex items-center gap-[var(--space-12)]">
            <ThemeToggle />

            <div className="hidden items-center gap-[var(--space-8)] sm:flex">
              <Button asChild variant="outline" size="sm" className="cursor-pointer">
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>

              <Button asChild size="sm" className="cursor-pointer border-transparent">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="relative flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-glass)] transition-all duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-accent)] md:hidden cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} activeId={activeId} />
    </>
  );
}
