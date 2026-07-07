import {
  Atom,
  BrainCircuit,
  Bot,
  Boxes,
  Code2,
  Eye,
  Figma,
  FileCode2,
  FlaskConical,
  Gauge,
  GitBranch,
  GraduationCap,
  Heart,
  Layers,
  Palette,
  Paintbrush,
  Send,
  Sparkles,
  Terminal,
  TrendingUp,
  Triangle,
  Wand2,
  Wrench,
  Github as GithubIcon,
  Users,
} from "lucide-react";
import type { EngineeringPrinciple, Skill, SkillCategory } from "@/types/skill";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend-engineering",
    title: "Frontend Engineering",
    description: "Designing reactive, type-safe web systems using React, Next.js, and JavaScript.",
    icon: Code2,
    skillIds: ["react", "nextjs", "typescript", "javascript"],
  },
  {
    id: "ui-development",
    title: "UI Development",
    description: "Creating highly responsive layouts and interactive components using Tailwind CSS and Framer Motion.",
    icon: Palette,
    skillIds: ["tailwind", "framer-motion", "css", "figma"],
  },
  {
    id: "performance",
    title: "Performance & State",
    description: "Optimizing rendering cycles, managing asynchronous state flow, and refining bundle sizes.",
    icon: Gauge,
    skillIds: ["zustand", "react-context", "api-integration"],
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    description: "Configuring VS Code, tracking code changes with Git/GitHub, and deploying via Vercel.",
    icon: Wrench,
    skillIds: ["git", "github", "vscode", "vercel"],
  },
  {
    id: "collaboration",
    title: "Collaboration & Teaching",
    description: "Translating design mockups, mentoring junior developers, and delivering technical workshops.",
    icon: GraduationCap,
    skillIds: ["teaching", "mentoring", "product-strategy"],
  },
  {
    id: "ai-development",
    title: "AI-assisted Development",
    description: "Employing LLM integration, prompt engineering, and code translation tools to double productivity.",
    icon: BrainCircuit,
    skillIds: ["prompt-engineering", "claude", "copilot"],
  },
];

export const SKILLS: Skill[] = [
  // Frontend Engineering
  { id: "react", name: "React.js", categoryId: "frontend-engineering", category: "Frontend Engineering", description: "Building component-driven UIs with strict state management and custom React hooks.", level: "expert", icon: Atom },
  { id: "nextjs", name: "Next.js", categoryId: "frontend-engineering", category: "Frontend Engineering", description: "Implementing file routing, server components, and styling fast loading speeds.", level: "expert", icon: Layers },
  { id: "typescript", name: "TypeScript", categoryId: "frontend-engineering", category: "Frontend Engineering", description: "Using type definitions and contracts to catch logic bugs in React components early.", level: "expert", icon: FileCode2 },
  { id: "javascript", name: "JavaScript", categoryId: "frontend-engineering", category: "Frontend Engineering", description: "Handling async data streams, promise flows, and standard DOM mutations.", level: "expert", icon: Terminal },

  // UI Development
  { id: "tailwind", name: "Tailwind CSS", categoryId: "ui-development", category: "UI Development", description: "Translating Figma layout files into responsive stylesheets with clean utilities.", level: "expert", icon: Palette },
  { id: "framer-motion", name: "Framer Motion", categoryId: "ui-development", category: "UI Development", description: "Adding physics-based UI transitions that guide user actions naturally without page lag.", level: "expert", icon: Sparkles },
  { id: "css", name: "CSS / Sass", categoryId: "ui-development", category: "UI Development", description: "Writing semantic layouts, custom property tokens, and robust page layouts.", level: "expert", icon: Paintbrush },
  { id: "figma", name: "Figma", categoryId: "ui-development", category: "UI Development", description: "Navigating design specs, extracting visual assets, and matching canvas lines to code.", level: "advanced", icon: Figma },

  // Performance & State
  { id: "zustand", name: "Zustand", categoryId: "performance", category: "Performance & State", description: "Managing lightweight, hook-based global state parameters for cross-component communication.", level: "expert", icon: Boxes },
  { id: "react-context", name: "React Context", categoryId: "performance", category: "Performance & State", description: "Sharing global user states, language profiles, and theme tokens across page trees.", level: "expert", icon: GitBranch },
  { id: "api-integration", name: "API Integration", categoryId: "performance", category: "Performance & State", description: "Working with REST endpoints, handling fetch errors, and setting loading bounds.", level: "advanced", icon: Send },

  // Developer Tools
  { id: "git", name: "Git", categoryId: "developer-tools", category: "Developer Tools", description: "Managing branch layouts, staging commits, and keeping git history readable.", level: "expert", icon: GitBranch },
  { id: "github", name: "GitHub", categoryId: "developer-tools", category: "Developer Tools", description: "Reviewing code changes, managing public repositories, and hosting codebases.", level: "expert", icon: GithubIcon },
  { id: "vscode", name: "VS Code", categoryId: "developer-tools", category: "Developer Tools", description: "Tuning system shortcuts, editor settings, and plugins for quick code drafting.", level: "expert", icon: Terminal },
  { id: "vercel", name: "Vercel", categoryId: "developer-tools", category: "Developer Tools", description: "Deploying React portals and setting preview domains for fast stakeholder updates.", level: "expert", icon: Triangle },

  // Collaboration & Teaching
  { id: "teaching", name: "Teaching", categoryId: "collaboration", category: "Collaboration & Teaching", description: "Explaining JavaScript rendering rules, CSS grids, and React flows in simple terms.", level: "expert", icon: Users },
  { id: "mentoring", name: "Mentoring", categoryId: "collaboration", category: "Collaboration & Teaching", description: "Reviewing student code, correcting common runtime bugs, and suggesting better structures.", level: "expert", icon: GraduationCap },
  { id: "product-strategy", name: "Product Strategy", categoryId: "collaboration", category: "Collaboration & Teaching", description: "Applying marketing course concepts to UI details to increase user conversion rates.", level: "advanced", icon: Heart },

  // AI-assisted Development
  { id: "prompt-engineering", name: "Prompt Engineering", categoryId: "ai-development", category: "AI-assisted Development", description: "Structuring system prompt guidelines, role settings, and context tables for LLM assistants.", level: "expert", icon: Bot },
  { id: "claude", name: "Claude AI", categoryId: "ai-development", category: "AI-assisted Development", description: "Pairing with Claude for drafting templates, refactoring routines, and solving logic trees.", level: "expert", icon: Sparkles },
  { id: "copilot", name: "GitHub Copilot", categoryId: "ai-development", category: "AI-assisted Development", description: "Writing repetitive component frames, test cases, and mock constants UIs.", level: "advanced", icon: Wand2 },
];

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    description: "Structuring code around clear boundaries so features can evolve without rewrites.",
    icon: Boxes,
  },
  {
    id: "performance-first",
    title: "Performance First",
    description: "Treating load time and responsiveness as core features, not afterthoughts.",
    icon: Gauge,
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description: "Designing for keyboard, screen reader, and low-vision users from day one.",
    icon: Eye,
  },
  {
    id: "scalability",
    title: "Scalability",
    description: "Making decisions today that hold up as teams and traffic grow tomorrow.",
    icon: TrendingUp,
  },
  {
    id: "developer-experience",
    title: "Developer Experience",
    description: "Investing in tooling and documentation that keep teams shipping confidently.",
    icon: Heart,
  },
  {
    id: "testing",
    title: "Testing",
    description: "Covering critical paths with tests that give real confidence to deploy.",
    icon: FlaskConical,
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description: "Staying curious about new tools while knowing when to stick with the basics.",
    icon: GraduationCap,
  },
];
