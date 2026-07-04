"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { NavLink } from "@/components/layout/nav-link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_ITEMS, SOCIAL_ITEMS, RESUME_URL } from "@/constants/navigation";
import { Magnetic } from "@/components/animations/magnetic";

const SCROLL_THRESHOLD = 24;

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
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
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
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="fixed inset-x-0 top-0 z-40"
      >
        <div
          style={{
            backdropFilter: isScrolled ? "blur(var(--blur-nav))" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(var(--blur-nav))" : "none",
          }}
          className={cn(
            "mx-auto flex w-full max-w-[1440px] items-center justify-between border-b px-[var(--space-24)] transition-[height,background-color,border-color,box-shadow] duration-[var(--duration-slow)] ease-[var(--ease-emphasized)] md:px-[var(--space-32)]",
            isScrolled
              ? "h-16 border-[var(--color-border)] bg-[var(--color-glass)] shadow-[var(--shadow-glass)]"
              : "h-20 border-transparent bg-transparent shadow-none"
          )}
        >
          <Logo />

          <LayoutGroup id="navbar">
            <nav aria-label="Primary" className="hidden items-center gap-[var(--space-4)] md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.id} href={item.href} label={item.label} isActive={activeId === item.id} />
              ))}
            </nav>
          </LayoutGroup>

          <div className="flex items-center gap-[var(--space-12)]">
            <div className="hidden items-center gap-[var(--space-8)] lg:flex">
              {SOCIAL_ITEMS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-full)] text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-text-primary)]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <ThemeToggle />

            <Magnetic strength={0.15}>
              <Button asChild variant="outline" size="sm" className="hidden rounded-[var(--radius-md)] lg:inline-flex">
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>
            </Magnetic>

            <Magnetic strength={0.15}>
              <Button asChild size="sm" className="hidden rounded-[var(--radius-md)] md:inline-flex">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </Magnetic>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="relative flex h-9 w-9 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:hidden"
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
                  {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
