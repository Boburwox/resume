"use client";

import { Award, Calendar, Code2, Users } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { StatCard } from "@/components/common/stat-card";

const STATS = [
  { icon: Calendar, value: 2, suffix: "+", label: "Years of Experience" },
  { icon: Code2, value: 10, suffix: "+", label: "Projects Built" },
  { icon: Award, value: 12, suffix: "+", label: "Technologies" },
  { icon: Users, value: 50, suffix: "+", label: "Students Guided" },
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
            label="My Story"
            heading="Engineering UIs with structural clarity"
            description="A human approach to writing software, teaching others, and scaling visual products."
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
              My focus on frontend engineering started when I realized that UIs are the critical bridge between users and software. I wanted to build interfaces that perform exactly as they look—fast, responsive, and predictable. Moving from static layouts to modular React, Next.js, and TypeScript setups, I treat UI engineering as the discipline of writing maintainable interfaces that resist complexity.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              To deepen my perspective, I study Marketing at the Samarkand State Institute of Economics and Service. This helps me understand the business value, user psychology, and product-market fit behind the code, enabling me to build products that solve real problems rather than just translating layouts.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Additionally, teaching frontend development and prompt engineering at JOYLINKS Learning Center has been a major milestone. Explaining React&apos;s data flow, browser behaviors, and LLM prompting to students is the ultimate test of understanding: it forces me to strip away buzzwords, master the fundamentals, and think deeply about clean architecture.
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
