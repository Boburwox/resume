"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/common/availability-badge";
import { SocialLinks } from "@/components/common/social-links";
import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { RESUME_URL } from "@/constants/navigation";

const NAME = "Bobur Xudoyberdiyev";
const TITLE = "Frontend Engineer";
const DESCRIPTION =
  "Frontend Engineer based in Samarkand, Uzbekistan. I build clean, responsive user interfaces using React and Next.js. I combine component-driven architecture with AI-guided workflows and practical teaching to build solid, user-centered web applications.";

const TECH_STACK = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Git"];

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

  const imageReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.95,
      y: shouldReduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_EMPHASIZED, delay: 0.2 },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-[var(--space-96)] md:py-[var(--space-128)]"
    >
      {/* Premium Background Grid & Ambient Highlights */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#8B5CF6]/5 opacity-[0.4] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] bottom-[15%] h-[450px] w-[450px] rounded-full bg-[#3B82F6]/5 opacity-[0.4] blur-[120px]"
      />

      <div className="container relative z-10 grid items-center gap-[var(--space-48)] lg:grid-cols-12 lg:gap-[var(--space-64)] pt-8">
        {/* Left Column: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left gap-[var(--space-24)] lg:col-span-7"
        >
          <motion.div variants={fadeUp}>
            <AvailabilityBadge />
          </motion.div>

          <div className="flex flex-col gap-[var(--space-12)] w-full">
            <motion.p
              variants={fadeUp}
              className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--color-text-secondary)]"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] text-slate-100 drop-shadow-[0_2px_24px_rgba(94,106,210,0.15)]"
            >
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent font-extrabold pb-2 inline-block">
                {NAME}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base font-bold tracking-[0.08em] uppercase text-[var(--color-accent)]"
            >
              {TITLE}
            </motion.p>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base md:text-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)] font-medium"
          >
            {DESCRIPTION}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-[var(--space-16)] w-full sm:w-auto">
            <Button asChild size="lg" className="w-[200px] sm:w-[220px]">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-1.5 h-5 w-5 stroke-[1.5]" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-[200px] sm:w-[220px]">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <Download className="mr-1.5 h-5 w-5 stroke-[1.5]" />
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
            className="flex flex-wrap items-center justify-center lg:justify-start gap-[var(--space-8)]"
          >
            {TECH_STACK.map((tech) => (
              <motion.li
                key={tech}
                variants={fadeUp}
                className="rounded-[10px] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-6)] text-[11px] font-semibold text-[var(--color-text-secondary)] backdrop-blur-[var(--blur-card)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-all duration-[250ms] cursor-default"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Column: Premium Portrait Card (Approx 40% Width) */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative lg:col-span-5 flex justify-center w-full"
        >
          {/* Glass Card Panel - 32px Radius */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[32px] p-[10px] bg-gradient-to-tr from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.08)] shadow-[var(--shadow-large)] group overflow-hidden">
            {/* Ambient Background Glow inside the Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/5 to-[#3B82F6]/5 opacity-[0.6] transition-all duration-[var(--duration-slow)]" />

            {/* Inner Border Ring */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#121316]">
              <Image
                src="/bobur.jpg"
                alt={NAME}
                fill
                priority
                sizes="(max-w-768px) 100vw, 380px"
                className="object-cover object-[center_22%] scale-100 transition-all duration-[var(--duration-slow)] ease-out filter contrast-[1.02] brightness-[0.98] group-hover:scale-102"
              />

              {/* Premium Keynote speaker gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/60 via-transparent to-transparent pointer-events-none" />

              {/* Soft lighting overlay */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-[0.35] pointer-events-none" />

              {/* Ultra-fine inner ring borders */}
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Double outer glow border highlight */}
            <div className="absolute -inset-px rounded-[32px] border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* Ambient Purple/Blue Behind Card */}
          <div className="absolute -z-10 bottom-6 right-6 h-60 w-60 rounded-full bg-[#8B5CF6]/10 opacity-[0.7] blur-[70px] pointer-events-none" />
          <div className="absolute -z-10 top-6 left-6 h-60 w-60 rounded-full bg-[#3B82F6]/10 opacity-[0.7] blur-[70px] pointer-events-none" />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}