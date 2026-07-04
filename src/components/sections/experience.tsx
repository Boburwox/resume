"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { ExperienceCard, type ExperienceItem } from "@/components/cards/experience-card";

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "vercel",
    company: "Vercel",
    role: "Senior Frontend Engineer",
    duration: "2023 — Present",
    location: "Remote",
    description:
      "Leading the design system and performance initiatives for core dashboard products, partnering closely with design to ship interfaces that feel instant across every device.",
    technologies: ["Next.js", "TypeScript", "React", "Turborepo"],
  },
  {
    id: "stripe",
    company: "Stripe",
    role: "Frontend Engineer",
    duration: "2021 — 2023",
    location: "San Francisco, CA",
    description:
      "Built and maintained checkout and billing surfaces used by thousands of merchants daily, with a focus on accessibility, resilience, and conversion-critical performance.",
    technologies: ["React", "GraphQL", "Tailwind CSS"],
  },
  {
    id: "linear",
    company: "Linear",
    role: "Product Engineer",
    duration: "2019 — 2021",
    location: "Remote",
    description:
      "Owned end-to-end feature delivery from prototyping to production, shipping keyboard-first workflows that became core to the product's identity.",
    technologies: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer",
    duration: "2017 — 2019",
    location: "Remote",
    description:
      "Partnered with early-stage startups to design and build their first production websites, establishing engineering practices that scaled with their teams.",
    technologies: ["JavaScript", "Node.js", "CSS"],
  },
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" aria-label="Experience" className="section relative">
      <div className="container">
        <SectionHeading
          label="Career Path"
          heading="Where I&apos;ve made an impact"
          description="A timeline of teams and products I&apos;ve helped build, from early-stage startups to platforms used by millions."
          align="center"
        />

        <div ref={timelineRef} className="relative mt-[var(--space-64)]">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-0 h-full w-px bg-[var(--color-border)] lg:left-1/2 lg:-translate-x-1/2"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: shouldReduceMotion ? 1 : lineScale }}
            className="absolute left-[19px] top-0 h-full w-px origin-top bg-[var(--color-accent)] lg:left-1/2 lg:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-[var(--space-48)]">
            {EXPERIENCE.map((item, index) => {
              const isRight = index % 2 === 1;

              return (
                <li key={item.id} className="relative pl-[var(--space-48)] lg:pl-0">
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 340, damping: 22 }}
                    className="absolute left-[13px] top-[6px] h-3 w-3 rounded-[var(--radius-full)] border-2 border-[var(--color-accent)] bg-[var(--color-background)] lg:left-1/2 lg:-translate-x-1/2"
                  />

                  <div className="lg:grid lg:grid-cols-2 lg:gap-[var(--space-64)]">
                    <div className={isRight ? "lg:col-start-2" : ""}>
                      <ExperienceCard item={item} align={isRight ? "right" : "left"} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
