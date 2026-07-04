"use client";

import { memo } from "react";
import { Languages } from "lucide-react";
import type { LanguageRecord } from "@/types/resume";

interface LanguageCardProps {
  item: LanguageRecord;
}

function LanguageCardComponent({ item }: LanguageCardProps) {
  return (
    <article className="glass flex min-h-44 flex-col justify-between rounded-[var(--radius-xl)] p-[var(--space-20)]">
      <div className="flex items-start justify-between gap-[var(--space-16)]">
        <div>
          <h4 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{item.language}</h4>
          <p className="text-sm text-[var(--color-text-secondary)]">{item.proficiency}</p>
        </div>
        <Languages className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true" />
      </div>
      <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">{item.description}</p>
      <div className="grid grid-cols-5 gap-[var(--space-8)]" aria-label={`${item.language} proficiency ${item.level}%`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={
              index < Math.ceil(item.level / 20)
                ? "h-2 rounded-[var(--radius-full)] bg-[var(--color-accent)]"
                : "h-2 rounded-[var(--radius-full)] bg-[var(--color-border)]"
            }
          />
        ))}
      </div>
    </article>
  );
}

export const LanguageCard = memo(LanguageCardComponent);
