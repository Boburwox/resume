"use client";

import { memo, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";

function BackToTopComponent() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsVisible(latest > 300);
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    onClick={scrollToTop}
                    type="button"
                    aria-label="Scroll back to top"
                    className="fixed bottom-[var(--space-24)] right-[var(--space-24)] z-50 flex h-11 w-11 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-text-primary)] shadow-[var(--shadow-glass)] backdrop-blur-md outline-none transition-all duration-[var(--duration-fast)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-glass-strong)] hover:shadow-[0_0_8px_var(--color-accent)]/10 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                    <ArrowUp className="h-5 w-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export const BackToTop = memo(BackToTopComponent);
