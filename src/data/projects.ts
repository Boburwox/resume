import { Accessibility, Clock, Gauge, Layers, Users } from "lucide-react";
import type { Project, ProjectFilterOption } from "@/types/project";

export const PROJECT_FILTERS: ProjectFilterOption[] = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "saas", label: "SaaS" },
  { id: "web", label: "Web Applications" },
  { id: "open-source", label: "Open Source" },
  { id: "ai", label: "AI" },
  { id: "frontend", label: "Frontend" },
  { id: "full-stack", label: "Full Stack" },
  { id: "experimental", label: "Experimental" },
];

export const PROJECTS: Project[] = [
  {
    id: "careone",
    title: "CareOne Portal Concept",
    subtitle: "A patient-provider consultation dashboard design concept",
    description:
      "A structured health-tech visual dashboard concept focused on clean layout spaces, theme tokens, and accessible scheduling views.",
    longDescription:
      "Built as a high-fidelity design concept for modern patient portal layouts. The core challenge was organizing dense medical charts, calendar slots, and communication history within a single space without overwhelming the user. Solved by defining CSS grids and customizing design tokens that scale cleanly across tablet and mobile displays, while adhering strictly to high-contrast WCAG rules for screen reader readability.",
    coverImage: "/images/projects/careone-cover.jpg",
    galleryImages: ["/images/projects/careone-1.jpg"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "saas",
    status: "in-progress",
    githubUrl: "https://github.com/Boburwox",
    featured: true,
    year: 2026,
    duration: "Ongoing",
    teamSize: 1,
    role: "Product & Frontend Engineer",
    highlights: [
      "Designed unified CSS grids adapting to variable-size medical logs and calendar entries",
      "Created structured dark-mode theme tokens for light-sensitive users",
      "Aligned layouts to strict accessibility rules using semantic markup and high contrast ratios",
      "Mapped user dashboard states to custom React context branches"
    ],
    metrics: [
      { label: "Dev Track", value: "Design", icon: Clock },
      { label: "Team Size", value: "1", icon: Users },
      { label: "Performance", value: "100", icon: Gauge },
      { label: "Accessibility", value: "100", icon: Accessibility },
    ],
  },
  {
    id: "medicine-reminder",
    title: "Medicine Reminder",
    subtitle: "A family medication scheduler and alarm tool",
    description:
      "An offline-first scheduling frontend built with React, focusing on local storage state serialization and lightweight contrast indicators.",
    longDescription:
      "Built to help family members track their daily medicine schedules without error. The primary challenge was managing dynamic alert states on the client side without database overhead. This was solved by using localStorage for state persistence and creating high-contrast visual status badges. Custom React hooks handle filtering schedules by date, time-of-day, and medication type, while Tailwind CSS keeps visual hierarchies clear for older users.",
    coverImage: "/images/projects/pulse-analytics-cover.jpg",
    galleryImages: ["/images/projects/pulse-analytics-1.jpg"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage APIs"],
    category: "frontend",
    status: "completed",
    githubUrl: "https://github.com/Boburwox",
    featured: true,
    year: 2025,
    duration: "2 months",
    teamSize: 1,
    role: "Frontend Engineer",
    highlights: [
      "Built high-contrast labels conforming to WCAG standards for older audience accessibility",
      "Achieved 100% offline state persistence via JSON-serialized localStorage hooks",
      "Optimized card filtering routines, eliminating rendering lag on older smartphones",
      "Iterated layout options based on user testing to improve navigation clarity"
    ],
    metrics: [
      { label: "Dev Time", value: "2 mo", icon: Clock },
      { label: "Team Size", value: "1", icon: Users },
      { label: "Speed Index", value: "98", icon: Gauge },
      { label: "Accessibility", value: "100", icon: Accessibility },
    ],
  },
  {
    id: "houzing-properties",
    title: "Houzing Properties",
    subtitle: "A multi-page real-estate catalog with complex search filtering",
    description:
      "A property directory UI designed to index, paginate, and filter large sets of home listings with zero input latency.",
    longDescription:
      "Constructed to study state management and components architecture on complex datasets. The engineering hurdle was handling simultaneous filters (price limits, bedrooms, location keywords) without causing multiple re-renders. By isolating input states to local component boundaries and lifting consolidated queries to a central filter hook, rendering was limited only to the database card lists, maintaining instant UI feedback.",
    coverImage: "/images/projects/open-component-kit-cover.jpg",
    galleryImages: ["/images/projects/open-component-kit-1.jpg"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "VS Code"],
    category: "frontend",
    status: "completed",
    githubUrl: "https://github.com/Boburwox",
    featured: false,
    year: 2024,
    duration: "3 months",
    teamSize: 1,
    role: "Frontend Engineer",
    highlights: [
      "Structured separate filter handlers to prevent unnecessary component updates",
      "Translated complex grid wireframes into responsive Tailwind CSS media queues",
      "Designed dynamic product search parameters that handle empty queries gracefully",
      "Mastered React list reconciliation keys to prevent visual state bugs"
    ],
    metrics: [
      { label: "Dev Time", value: "3 mo", icon: Clock },
      { label: "Team Size", value: "1", icon: Users },
      { label: "Performance", value: "97", icon: Gauge },
      { label: "Tech Count", value: "4", icon: Layers },
    ],
  },
  {
    id: "coffee-storefront",
    title: "DTC Coffee Storefront",
    subtitle: "A mobile-first e-commerce landing and checkout workflow",
    description:
      "A fast, responsive product ordering UI featuring global cart synchronization and fluid cart drawer transitions.",
    longDescription:
      "Built as a practical storefront to master e-commerce checkout logic and fluid navigation. The core issue was maintaining cart item counts and price changes across headers, details pages, and pop-out panels. Solved by implementing React Context to manage a global basket state, and integrating lightweight Framer Motion transitions to keep the checkout drawer movement fluid and natural on mobile screens.",
    coverImage: "/images/projects/nimbus-commerce-cover.jpg",
    galleryImages: ["/images/projects/nimbus-commerce-1.jpg"],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Context API"],
    category: "frontend",
    status: "completed",
    githubUrl: "https://github.com/Boburwox",
    featured: false,
    year: 2024,
    duration: "2 months",
    teamSize: 1,
    role: "UI & Frontend Developer",
    highlights: [
      "Created a robust context provider for real-time basket addition and price tally summaries",
      "Integrated Framer Motion components to animate sliding drawers without layout shifting",
      "Optimized image sizing using modern responsive media rules",
      "Gained deep expertise in handling state propagation across nested list nodes"
    ],
    metrics: [
      { label: "Dev Time", value: "2 mo", icon: Clock },
      { label: "Team Size", value: "1", icon: Users },
      { label: "UX Polish", value: "99", icon: Gauge },
      { label: "Tech Count", value: "4", icon: Layers },
    ],
  },
];
