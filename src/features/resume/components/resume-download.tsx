"use client";

import { memo } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ResumeData } from "@/types/resume";

interface ResumeDownloadProps {
  download: ResumeData["download"];
}

function ResumeDownloadComponent({ download }: ResumeDownloadProps) {
  return (
    <section className="glass flex flex-col gap-[var(--space-20)] rounded-[var(--radius-2xl)] p-[var(--space-32)] text-center sm:items-center">
      <h3 className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
        Keep the resume close.
      </h3>
      <p className="max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
        Download the PDF or open it in a new tab for a conventional resume view.
      </p>
      <div className="flex flex-wrap justify-center gap-[var(--space-16)]">
        <Button
          asChild
          size="lg"
          className="group cursor-pointer"
        >
          <a href={download.pdfUrl} download>
            <Download className="h-4 w-4 mr-1.5" />
            Download PDF
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group cursor-pointer"
        >
          <a href={download.openUrl} target="_blank" rel="noreferrer">
            Open Resume
            <ExternalLink className="h-4 w-4 ml-1.5" />
          </a>
        </Button>
      </div>
    </section>
  );
}

export const ResumeDownload = memo(ResumeDownloadComponent);
