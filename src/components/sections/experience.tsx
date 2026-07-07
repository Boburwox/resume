"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { ExperienceCard, type ExperienceItem } from "@/components/cards/experience-card";

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "joylinks-teaching",
    company: "JOYLINKS Learning Center",
    role: "Frontend & Prompt Engineering Teacher",
    duration: "Sep 2025 — Present",
    location: "Samarkand, Uzbekistan",
    description:
      "Teaching JavaScript and React.js. Guiding 50+ students in UI engineering, component state flow, and leveraging AI tools to accelerate code generation, debugging, and mock drafting.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Prompt Engineering", "Git"],
  },
  {
    id: "frontend-intern",
    company: "Remote Internship",
    role: "Frontend Developer Intern",
    duration: "Feb 2024 — Aug 2024",
    location: "Remote",
    description:
      "Collaborated in remote workflows to construct responsive components using React and Tailwind CSS. Participated in UI reviews, integrated REST APIs, and improved page rendering speeds.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Git"],
  },
  {
    id: "independent-work",
    company: "Personal Projects",
    role: "Frontend Engineer & Builder",
    duration: "2024 — Present",
    location: "Samarkand, Uzbekistan",
    description:
      "Designing responsive interfaces and full-stack templates. Built medicine reminders and real-estate property interfaces, focusing on state management, route logic, and lightweight styling.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
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
          heading="Where I've made an impact"
          description="A timeline of projects and concepts I have actively shaped and built."
          align="center"
        />

        <div ref={timelineRef} className="relative mt-[var(--space-64)] font-body">
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
