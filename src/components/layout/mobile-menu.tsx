"use client";

import { useCallback, useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SOCIAL_ITEMS, RESUME_URL } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export function MobileMenu({ isOpen, onClose, activeId }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
          style={{ backdropFilter: "blur(var(--blur-glass))", WebkitBackdropFilter: "blur(var(--blur-glass))" }}
          className="fixed inset-0 z-50 bg-[var(--color-overlay)] md:hidden"
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex h-full w-full flex-col bg-[var(--color-surface)] px-[var(--space-24)] pt-[var(--space-24)] pb-[var(--space-48)]"
          >
            <div className="flex items-center justify-end">
              <Button
                ref={closeButtonRef}
                type="button"
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-[var(--radius-full)]"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav aria-label="Mobile" className="mt-[var(--space-32)] flex flex-1 flex-col justify-center gap-[var(--space-8)]">
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    aria-current={activeId === item.id ? "page" : undefined}
                    className={
                      activeId === item.id
                        ? "block py-[var(--space-12)] text-3xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]"
                        : "block py-[var(--space-12)] text-3xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-text-primary)]"
                    }
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-[var(--space-16)] border-t border-[var(--color-border)] pt-[var(--space-24)]"
            >
              <div className="flex items-center gap-[var(--space-16)]">
                {SOCIAL_ITEMS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-text-primary)]"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <div className="flex gap-[var(--space-12)]">
                <Button asChild variant="outline" className="flex-1 rounded-[var(--radius-md)]">
                  <a href={RESUME_URL} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </Button>
                <Button asChild className="flex-1 rounded-[var(--radius-md)]">
                  <a href="#contact" onClick={onClose}>
                    Hire Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
