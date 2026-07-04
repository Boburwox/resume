"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/common/availability-badge";
import { SocialLinks } from "@/components/common/social-links";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { FloatingShapes } from "@/components/common/floating-shapes";
import { RESUME_URL } from "@/constants/navigation";

const NAME = "John Doe";
const TITLE = "Senior Frontend Engineer";
const DESCRIPTION =
  "I build fast, accessible, and scalable web products with a focus on clean architecture and premium user experience. Currently crafting interfaces that feel effortless.";

const TECH_STACK = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Node.js"];

const EASE_EMPHASIZED = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_EMPHASIZED },
    },
  };

  const visualReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.92,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(16px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE_EMPHASIZED, delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-[var(--radius-full)] bg-[var(--color-accent)] opacity-[0.12] blur-[var(--blur-glass)]"
      />

      <div className="container relative z-10 grid items-center gap-[var(--space-64)] py-[var(--space-96)] lg:grid-cols-2 lg:gap-[var(--space-32)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-[var(--space-24)]"
        >
          <motion.div variants={fadeUp}>
            <AvailabilityBadge />
          </motion.div>

          <div className="flex flex-col gap-[var(--space-8)]">
            <motion.p
              variants={fadeUp}
              className="text-body font-medium text-[var(--color-text-secondary)]"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-hero font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] text-[var(--color-text-primary)]"
            >
              {NAME}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="gradient-text text-h3 font-semibold leading-[var(--leading-snug)] tracking-[var(--tracking-tight)]"
            >
              {TITLE}
            </motion.p>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]"
          >
            {DESCRIPTION}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-[var(--space-16)]">
            <Button asChild size="lg" className="button-hover rounded-[var(--radius-md)]">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="button-hover rounded-[var(--radius-md)]">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SocialLinks />
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            aria-label="Tech stack"
            className="flex flex-wrap gap-[var(--space-8)]"
          >
            {TECH_STACK.map((tech) => (
              <motion.li
                key={tech}
                variants={fadeUp}
                className="rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-4)] text-xs font-medium text-[var(--color-text-secondary)] backdrop-blur-[var(--blur-card)]"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={visualReveal}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
          className="relative hidden h-[480px] lg:block"
        >
          <FloatingShapes />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}