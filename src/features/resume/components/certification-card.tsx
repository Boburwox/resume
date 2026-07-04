"use client";

import { memo } from "react";
import { BadgeCheck } from "lucide-react";
import type { CertificationRecord } from "@/types/resume";

interface CertificationCardProps {
  item: CertificationRecord;
}

function CertificationCardComponent({ item }: CertificationCardProps) {
  return (
    <article className="glass flex h-full gap-[var(--space-16)] rounded-[var(--radius-xl)] p-[var(--space-20)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] text-[var(--color-accent)]">
        <BadgeCheck className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-[var(--space-8)]">
        <div>
          <h4 className="text-body-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h4>
          <p className="text-sm text-[var(--color-text-secondary)]">{item.issuer}</p>
          <p className="text-xs text-[var(--color-muted)]">{item.date}</p>
        </div>
        <p className="text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">{item.description}</p>
      </div>
    </article>
  );
}

export const CertificationCard = memo(CertificationCardComponent);
