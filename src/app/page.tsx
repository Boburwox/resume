import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/cards/skills";
import { Projects } from "@/components/sections/projects";
import { GitHubDashboard } from "@/features/github/components/github-dashboard";
import { ResumeSection } from "@/features/resume/components/resume-section";
import { ContactSection } from "@/features/contact/components/contact-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GitHubDashboard />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
