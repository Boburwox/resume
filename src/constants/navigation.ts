import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SITE_INITIALS = "JD";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SOCIAL_ITEMS: SocialItem[] = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export const RESUME_URL = "/resume.pdf";
