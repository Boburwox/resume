import {
  BrainCircuit,
  Code2,
  Languages,
  Layers,
  Palette,
  Rocket,
  School,
  ServerCog,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { ResumeData } from "@/types/resume";

export const RESUME_DATA: ResumeData = {
  summary: {
    title: "Engineering UIs with structural clarity",
    description:
      "A structured overview of my technical progression across React architectures, visual interfaces, prompt engineering instruction, and marketing insights.",
    metrics: [
      { label: "Primary Track", value: "React & Next.js" },
      { label: "Current Focus", value: "UI Engineering" },
      { label: "Teaching Track", value: "Frontend & AI" },
    ],
  },
  timeline: [
    {
      id: "mohirdev-react",
      title: "React.js Specialization Path",
      description: "Studied semantic components, state workflows, and React fundamentals at Mohirdev.",
      date: "2024",
      tags: ["React.js", "JavaScript", "HTML/CSS"],
      icon: Code2,
      status: "completed",
    },
    {
      id: "remote-internship",
      title: "Frontend Developer Internship",
      description: "Transitioned to building remote React interfaces and responsive CSS components.",
      date: "2024",
      tags: ["React.js", "Tailwind CSS", "Git"],
      icon: Layers,
      status: "completed",
    },
    {
      id: "joylinks-teacher",
      title: "Javascript & React Teacher at JOYLINKS",
      description: "Began teaching frontend code structures, mentoring 50+ students on responsive mockups.",
      date: "2025",
      tags: ["Teaching", "JavaScript", "Mentoring"],
      icon: Rocket,
      status: "current",
    },
    {
      id: "prompt-teacher-next",
      title: "Prompt Engineering Teacher & Next.js Focus",
      description: "Added AI workflow training while building modular Next.js portal concepts.",
      date: "2026",
      tags: ["AI Prompting", "Next.js", "Supabase"],
      icon: BrainCircuit,
      status: "current",
    },
  ],
  education: [
    {
      id: "sam-state-institute",
      school: "Samarqand State Institute of Economics and Service",
      degree: "Bachelor's in Marketing",
      duration: "Sep 2025 - Present",
      description:
        "Developing a solid grasp of user psychology, conversion strategy, and product alignment to build codebase structures that fit user markets.",
      achievements: ["Studying interaction models", "Connecting marketing metrics to interface layout decisions"],
    },
    {
      id: "mohirdev-track",
      school: "Mohirdev Online Academy",
      degree: "React.js Developer Course",
      duration: "Feb 2024 - Aug 2024",
      description:
        "A detailed frontend program led by Ulug'bek Samigjanov, specializing in state components, API integrations, and UI patterns.",
      achievements: ["Succeeded in making responsive dashboards", "Learned React components architecture"],
    },
  ],
  experience: [
    {
      id: "joylinks",
      role: "Frontend & Prompt Engineering Teacher (Part-time)",
      company: "JOYLINKS Learning Center — Samarqand",
      duration: "Sep 2025 - Present",
      responsibilities: [
        "Instructing JavaScript, HTML/CSS, React.js fundamentals, and advanced responsive styling grids",
        "Mentoring over 50+ students through custom project wireframes, debugging sessions, and git workflows",
        "Teaching prompt optimization guidelines, LLM workflows, and AI tool integrations to double coding speed",
        "Consolidating personal codebase structures by simplifying rendering rules for student syllabus details"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Prompt Engineering", "Git"],
    },
    {
      id: "remote-intern",
      role: "Frontend Developer Intern (Remote)",
      company: "Remote Internship Track",
      duration: "Feb 2024 - Aug 2024",
      responsibilities: [
        "Constructed responsive UI layout coordinates and reusable components using React and Tailwind CSS style rules",
        "Integrated REST APIs with state boundaries, managing fallback interfaces and JSON query parameters",
        "Collaborated in git-driven reviews, aligning local asset file sizes to decrease layout loading times",
        "Improved cross-device rendering to eliminate layout shifts on desktop and mobile browsers"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
    },
  ],
  techJourney: [
    { id: "html", label: "HTML5", date: "2023", description: "Semantic markups and readable documents.", icon: Code2, status: "completed" },
    { id: "css", label: "CSS3 / Sass", date: "2023", description: "Styling layout flows and custom media rules.", icon: Sparkles, status: "completed" },
    { id: "js", label: "JavaScript ES6+", date: "2023", description: "DOM handlers, rendering arrays, and async calls.", icon: Code2, status: "completed" },
    { id: "react", label: "React.js", date: "2024", description: "Structured state hooks, keys, and modular visual cards.", icon: Rocket, status: "completed" },
    { id: "tailwind", label: "Tailwind CSS", date: "2024", description: "Speeding up UI building with design-token-based rules.", icon: Palette, status: "completed" },
    { id: "next", label: "Next.js", date: "2025", description: "Next.js routing structures and server boundaries.", icon: ServerCog, status: "current" },
    { id: "git", label: "Git & GitHub", date: "2024", description: "Managing code revision branches and remote review pages.", icon: Code2, status: "completed" },
    { id: "ai", label: "AI & Prompting", date: "2025", description: "Applied prompting rules to write and review code quickly.", icon: BrainCircuit, status: "current" },
  ],
  certifications: [
    {
      id: "react-mohirdev-cert",
      title: "React.js Specialization Certificate",
      issuer: "Mohirdev Online Academy",
      date: "Aug 2024",
      description: "Intense specialization course covering React lifecycle hooks, custom states, dynamic lists, and API integration paths.",
    },
  ],
  languages: [
    { id: "uzbek", language: "Uzbek", proficiency: "Native", level: 100, description: "Primary language for daily work and lectures." },
    { id: "english", language: "English", proficiency: "Intermediate", level: 65, description: "Reading docs, writing clean comments, and engineering chat." },
    { id: "russian", language: "Russian", proficiency: "Basic", level: 40, description: "Understanding basic requests and code specifications." },
    { id: "german", language: "German", proficiency: "Basic Learning", level: 35, description: "Currently starting lessons for future career growth." },
  ],
  currentLearning: [
    { id: "next-advanced", title: "Next.js Router Concepts", description: "Server components, fetching cache rules, and server actions.", icon: Rocket },
    { id: "ts-scaling", title: "TypeScript Interface Contracts", description: "Defining type boundaries to secure component inputs.", icon: Layers },
    { id: "prompt-flow", title: "Advanced Prompt Frameworks", description: "Leveraging structured prompts to speed up debugging cycles.", icon: BrainCircuit },
    { id: "deutsch-learn", title: "German Language", description: "A1 language studies for international career expansion.", icon: Languages },
  ],
  futureGoals: [
    { id: "worldclass-frontend", title: "World-Class Frontend Engineer", description: "Build scalable visual products with bulletproof performance benchmarks.", icon: Trophy },
    { id: "international-tech", title: "Top Tech Organization", description: "Apply frontend layout mastery on global scale user products.", icon: School },
    { id: "openwork", title: "Open Source Utilities", description: "Develop and publish modular, accessible React visual hooks.", icon: Code2 },
  ],
  download: {
    pdfUrl: "#",
    openUrl: "#",
  },
};
