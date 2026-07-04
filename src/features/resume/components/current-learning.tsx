"use client";

import { memo } from "react";
import type { ResumeFocusItem } from "@/types/resume";

interface CurrentLearningProps {
  items: ResumeFocusItem[];
}

function CurrentLearningComponent({ items }: CurrentLearningProps) {
  return (
    <section aria-labelledby="current-learning-title" className="flex flex-col gap-[var(--space-24)]">
      <div>
        <h3 id="current-learning-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          Current Learning
        </h3>
        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Active learning tracks connected to stronger product engineering outcomes.
        </p>
      </div>
      <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.id} className="glass flex flex-col gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]">
              <Icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
                <p className="mt-[var(--space-8)] text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export const CurrentLearning = memo(CurrentLearningComponent);
