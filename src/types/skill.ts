import type { LucideIcon } from "lucide-react";

export type ExperienceLevel = "learning" | "comfortable" | "advanced" | "expert";

export interface Skill {
  id: string;
  name: string;
  categoryId: string;
  category: string;
  description: string;
  level: ExperienceLevel;
  icon: LucideIcon;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skillIds: string[];
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
