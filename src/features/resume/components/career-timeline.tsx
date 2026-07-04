"use client";

import { memo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TimelineItem } from "@/features/resume/components/timeline-item";
import type { TimelineMilestone } from "@/types/resume";

interface CareerTimelineProps {
  items: TimelineMilestone[];
}

function CareerTimelineComponent({ items }: CareerTimelineProps) {
  const shouldReduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start center", "end center"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section aria-labelledby="resume-timeline-title" className="flex flex-col gap-[var(--space-24)]">
      <div>
        <h3 id="resume-timeline-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          Career Timeline
        </h3>
        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Milestones that show how the engineering track is evolving from foundations to product-grade systems.
        </p>
      </div>

      <div ref={timelineRef} className="relative">
        <div aria-hidden="true" className="absolute left-[19px] top-0 h-full w-px bg-[var(--color-border)] lg:left-1/2 lg:-translate-x-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: shouldReduceMotion ? 1 : lineScale }}
          className="absolute left-[19px] top-0 h-full w-px origin-top bg-[var(--color-accent)] lg:left-1/2 lg:-translate-x-1/2"
        />
        <ol className="flex flex-col gap-[var(--space-32)]">
          {items.map((item, index) => {
            const isRight = index % 2 === 1;
            return (
              <li key={item.id} className="relative pl-[var(--space-48)] lg:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-[13px] top-[18px] h-3 w-3 rounded-[var(--radius-full)] border-2 border-[var(--color-accent)] bg-[var(--color-background)] lg:left-1/2 lg:-translate-x-1/2"
                />
                <div className="lg:grid lg:grid-cols-2 lg:gap-[var(--space-64)]">
                  <div className={isRight ? "lg:col-start-2" : ""}>
                    <TimelineItem item={item} align={isRight ? "right" : "left"} />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export const CareerTimeline = memo(CareerTimelineComponent);
