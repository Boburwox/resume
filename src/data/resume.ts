import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Languages,
  Layers,
  Rocket,
  School,
  ServerCog,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { ResumeData } from "@/types/resume";

export const RESUME_DATA: ResumeData = {
  summary: {
    title: "Resume as an engineering growth system",
    description:
      "A focused view of technical progression across frontend systems, product thinking, applied AI, and long-term engineering ambition.",
    metrics: [
      { label: "Primary Track", value: "Frontend" },
      { label: "Current Focus", value: "Next.js" },
      { label: "Product Direction", value: "SaaS + AI" },
    ],
  },
  timeline: [
    {
      id: "frontend-start",
      title: "Started Frontend Development",
      description: "Built the foundation with semantic interfaces, browser fundamentals, and UI implementation discipline.",
      date: "2023",
      tags: ["HTML", "CSS", "JavaScript"],
      icon: Code2,
      status: "completed",
    },
    {
      id: "typed-react",
      title: "Moved Into Typed React Systems",
      description: "Shifted from page building to component architecture, state management, and typed product surfaces.",
      date: "2024",
      tags: ["TypeScript", "React", "Design Systems"],
      icon: Layers,
      status: "completed",
    },
    {
      id: "next-platform",
      title: "Next.js Product Engineering",
      description: "Focused on App Router, performance, route handlers, data flow, accessibility, and production workflows.",
      date: "2025",
      tags: ["Next.js", "Vercel", "Performance"],
      icon: Rocket,
      status: "current",
    },
    {
      id: "ai-products",
      title: "AI Engineering and SaaS Products",
      description: "Combining product engineering with applied AI, backend foundations, and real business use cases.",
      date: "Future",
      tags: ["AI", "SaaS", "CareOne"],
      icon: BrainCircuit,
      status: "future",
    },
  ],
  education: [
    {
      id: "self-directed",
      school: "Self-directed Engineering Program",
      degree: "Software Engineering Focus",
      duration: "2023 - Present",
      description:
        "A rigorous practical track centered on frontend engineering, production architecture, and building deployable products.",
      achievements: ["Built production-style portfolio modules", "Studied modern React and Next.js patterns", "Practiced accessible UI systems"],
    },
  ],
  experience: [
    {
      id: "portfolio-engineer",
      role: "Frontend Engineer",
      company: "Independent Product Work",
      duration: "2024 - Present",
      responsibilities: [
        "Designed premium portfolio sections with reusable architecture",
        "Built typed React components with strict TypeScript constraints",
        "Implemented responsive layouts, animation states, and accessible interactions",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "careone",
      role: "Product Builder",
      company: "CareOne Concept",
      duration: "Future Track",
      responsibilities: [
        "Exploring healthcare startup workflows and patient-centered product ideas",
        "Planning AI-assisted products that solve practical operational problems",
      ],
      technologies: ["AI", "System Design", "Backend", "Product Strategy"],
    },
  ],
  techJourney: [
    { id: "html", label: "HTML", date: "Start", description: "Semantic structure and accessible documents.", icon: Code2, status: "completed" },
    { id: "css", label: "CSS", date: "Base", description: "Responsive layout, tokens, and interface polish.", icon: Sparkles, status: "completed" },
    { id: "js", label: "JavaScript", date: "Core", description: "Interaction logic, data flow, and browser APIs.", icon: Code2, status: "completed" },
    { id: "ts", label: "TypeScript", date: "Typed", description: "Safer contracts and production-grade components.", icon: Layers, status: "completed" },
    { id: "react", label: "React", date: "UI", description: "Component architecture and reusable stateful interfaces.", icon: Rocket, status: "completed" },
    { id: "next", label: "Next.js", date: "Platform", description: "Routing, server boundaries, metadata, and APIs.", icon: ServerCog, status: "current" },
    { id: "fullstack", label: "Full Stack", date: "Expanding", description: "Database-backed products and backend systems.", icon: Database, status: "current" },
    { id: "ai", label: "AI", date: "Future", description: "AI-powered products and engineering workflows.", icon: BrainCircuit, status: "future" },
  ],
  certifications: [
    {
      id: "frontend-specialization",
      title: "Frontend Engineering Track",
      issuer: "Practical Study",
      date: "Ongoing",
      description: "Focused practice in React, TypeScript, accessibility, performance, and production UI architecture.",
    },
  ],
  languages: [
    { id: "uzbek", language: "Uzbek", proficiency: "Native", level: 100, description: "Primary language for daily communication." },
    { id: "english", language: "English", proficiency: "Professional Growth", level: 72, description: "Focused on technical reading, writing, and engineering communication." },
    { id: "german", language: "German", proficiency: "B1 Goal", level: 45, description: "Actively learning toward stronger professional fluency." },
  ],
  currentLearning: [
    { id: "advanced-next", title: "Advanced Next.js", description: "App Router, server boundaries, caching, and production patterns.", icon: Rocket },
    { id: "system-design", title: "System Design", description: "Reliable architecture, data flow, and scalable product decisions.", icon: ServerCog },
    { id: "ai-engineering", title: "AI Engineering", description: "Applied AI workflows and product-grade AI features.", icon: BrainCircuit },
    { id: "german-b1", title: "German B1", description: "Consistent language learning for international opportunities.", icon: Languages },
  ],
  futureGoals: [
    { id: "senior-engineer", title: "Senior Software Engineer", description: "Grow into high-impact ownership across product and architecture.", icon: Trophy },
    { id: "big-tech", title: "Google / Microsoft", description: "Prepare for world-class engineering interviews and execution standards.", icon: School },
    { id: "open-source", title: "Open Source Contributions", description: "Contribute reusable tools, components, and learning resources.", icon: Code2 },
    { id: "careone-goal", title: "Healthcare Startup", description: "Build CareOne into a useful healthcare-focused product ecosystem.", icon: GraduationCap },
  ],
  download: {
    pdfUrl: "/resume.pdf",
    openUrl: "/resume.pdf",
  },
};
