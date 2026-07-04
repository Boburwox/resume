import type { LucideIcon } from "lucide-react";

export type ResumeStatus = "completed" | "current" | "future";

export interface ResumeMetric {
  label: string;
  value: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  icon: LucideIcon;
  status: ResumeStatus;
}

export interface EducationRecord {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface ResumeExperienceRecord {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface TechJourneyStep {
  id: string;
  label: string;
  date: string;
  description: string;
  icon: LucideIcon;
  status: ResumeStatus;
}

export interface CertificationRecord {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface LanguageRecord {
  id: string;
  language: string;
  proficiency: string;
  level: number;
  description: string;
}

export interface ResumeFocusItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ResumeData {
  summary: {
    title: string;
    description: string;
    metrics: ResumeMetric[];
  };
  timeline: TimelineMilestone[];
  education: EducationRecord[];
  experience: ResumeExperienceRecord[];
  techJourney: TechJourneyStep[];
  certifications: CertificationRecord[];
  languages: LanguageRecord[];
  currentLearning: ResumeFocusItem[];
  futureGoals: ResumeFocusItem[];
  download: {
    pdfUrl: string;
    openUrl: string;
  };
}
