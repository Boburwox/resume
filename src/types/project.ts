import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "web"
  | "saas"
  | "open-source"
  | "ai"
  | "frontend"
  | "backend"
  | "full-stack"
  | "experimental";

export type ProjectStatus = "completed" | "in-progress" | "private" | "archived" | "open-source";

export interface ProjectMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  coverImage: string;
  galleryImages: string[];
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
  duration: string;
  teamSize: number;
  role: string;
  highlights: string[];
  metrics: ProjectMetric[];
}

export type ProjectFilterId = ProjectCategory | "all" | "featured";

export interface ProjectFilterOption {
  id: ProjectFilterId;
  label: string;
}
