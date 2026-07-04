"use client";

import { memo } from "react";
import { RESUME_DATA } from "@/data/resume";
import { CareerTimeline } from "@/features/resume/components/career-timeline";
import { CertificationCard } from "@/features/resume/components/certification-card";
import { CurrentLearning } from "@/features/resume/components/current-learning";
import { EducationCard } from "@/features/resume/components/education-card";
import { ExperienceCard } from "@/features/resume/components/experience-card";
import { FutureGoals } from "@/features/resume/components/future-goals";
import { LanguageCard } from "@/features/resume/components/language-card";
import { ResumeDownload } from "@/features/resume/components/resume-download";
import { ResumeHeader } from "@/features/resume/components/resume-header";
import { TechJourney } from "@/features/resume/components/tech-journey";

function ResumeSectionComponent() {
  return (
    <section id="resume" aria-label="Resume experience" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />

      <div className="container relative z-10 flex flex-col gap-[var(--space-48)]">
        <ResumeHeader summary={RESUME_DATA.summary} />
        <CareerTimeline items={RESUME_DATA.timeline} />

        <SectionBlock title="Education" description="Formalized learning as a practical engineering track.">
          <div className="grid gap-[var(--space-16)] lg:grid-cols-2">
            {RESUME_DATA.education.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Professional Experience" description="Experience framed around ownership, delivery, and product outcomes.">
          <div className="grid gap-[var(--space-16)] lg:grid-cols-2">
            {RESUME_DATA.experience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </SectionBlock>

        <TechJourney items={RESUME_DATA.techJourney} />

        <SectionBlock title="Certifications" description="Structured learning signals and professional development tracks.">
          <div className="grid gap-[var(--space-16)] lg:grid-cols-2">
            {RESUME_DATA.certifications.map((item) => (
              <CertificationCard key={item.id} item={item} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Languages" description="Communication range for local and international engineering environments.">
          <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.languages.map((item) => (
              <LanguageCard key={item.id} item={item} />
            ))}
          </div>
        </SectionBlock>

        <CurrentLearning items={RESUME_DATA.currentLearning} />
        <FutureGoals items={RESUME_DATA.futureGoals} />
        <ResumeDownload download={RESUME_DATA.download} />
      </div>
    </section>
  );
}

interface SectionBlockProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SectionBlock({ title, description, children }: SectionBlockProps) {
  return (
    <section aria-labelledby={`${title.replaceAll(" ", "-").toLowerCase()}-title`} className="flex flex-col gap-[var(--space-24)]">
      <div>
        <h3
          id={`${title.replaceAll(" ", "-").toLowerCase()}-title`}
          className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]"
        >
          {title}
        </h3>
        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

export const ResumeSection = memo(ResumeSectionComponent);
