import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/cards/skills";
import { Projects } from "@/components/sections/projects";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

import { GitHubLoading } from "@/features/github/components/github-loading";
import { ResumeLoading } from "@/features/resume/components/resume-loading";
import { ContactLoading } from "@/features/contact/components/contact-loading";

// Dynamic import components with custom skeletal loading loaders
const GitHubDashboard = dynamic(
  () => import("@/features/github/components/github-dashboard").then((m) => m.GitHubDashboard),
  {
    loading: () => <GitHubLoading />
  }
);

const ResumeSection = dynamic(
  () => import("@/features/resume/components/resume-section").then((m) => m.ResumeSection),
  {
    loading: () => <ResumeLoading />
  }
);

const ContactSection = dynamic(
  () => import("@/features/contact/components/contact-section").then((m) => m.ContactSection),
  {
    loading: () => <ContactLoading />
  }
);

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ScrollReveal variant="fade-up">
        <About />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <Experience />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <Skills />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <Projects />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <GitHubDashboard />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <ResumeSection />
      </ScrollReveal>
      <ScrollReveal variant="fade-up">
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
