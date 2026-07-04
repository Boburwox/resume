"use client";

import { Award, Calendar, Code2, Users } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { StatCard } from "@/components/common/stat-card";

const STATS = [
  { icon: Calendar, value: 6, suffix: "+", label: "Years of Experience" },
  { icon: Code2, value: 48, suffix: "+", label: "Projects Completed" },
  { icon: Award, value: 20, suffix: "+", label: "Technologies" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
];

const EASE_EMPHASIZED = [0.16, 1, 0.3, 1] as const;

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EMPHASIZED } },
  };

  return (
    <section id="about" aria-label="About me" className="section relative">
      <div className="container grid gap-[var(--space-64)] lg:grid-cols-2 lg:items-start lg:gap-[var(--space-48)]">
        <div>
          <SectionHeading
            label="About Me"
            heading="Engineering with intention"
            description="A closer look at how I think, build, and grow as an engineer."
            align="left"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-[var(--space-32)] flex flex-col gap-[var(--space-20)] text-body-lg leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]"
          >
            <motion.p variants={paragraphVariants}>
              I&apos;m a frontend engineer who cares as much about how software feels as how it
              performs. Over the past six years I&apos;ve worked across startups and larger
              product teams, turning ambiguous ideas into interfaces people trust and enjoy using
              every day.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              My mission is simple: build products that respect people&apos;s time and attention.
              I hold myself to a high bar on performance, accessibility, and craft, because those
              details are what separate good software from software people genuinely love.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              I value clarity over cleverness, calm collaboration over noise, and steady iteration
              over big rewrites. The teams I do my best work with are the ones that treat design
              and engineering as one continuous conversation.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Looking ahead, I&apos;m focused on deepening my product sense, mentoring engineers
              earlier in their careers, and contributing to tools that make the web faster for
              everyone.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-[var(--space-16)] sm:gap-[var(--space-24)]">
          {STATS.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
