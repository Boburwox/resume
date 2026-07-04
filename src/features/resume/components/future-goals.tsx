"use client";

import { memo } from "react";
import type { ResumeFocusItem } from "@/types/resume";

interface FutureGoalsProps {
  items: ResumeFocusItem[];
}

function FutureGoalsComponent({ items }: FutureGoalsProps) {
  return (
    <section aria-labelledby="future-goals-title" className="flex flex-col gap-[var(--space-24)]">
      <div>
        <h3 id="future-goals-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          Future Goals
        </h3>
        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          A professional roadmap aimed at higher ownership, stronger products, and useful open-source work.
        </p>
      </div>
      <div className="grid gap-[var(--space-16)] sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.id} className="glass flex gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]">
              <Icon className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
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

export const FutureGoals = memo(FutureGoalsComponent);
