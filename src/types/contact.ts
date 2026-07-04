import type { LucideIcon } from "lucide-react";

export interface AvailabilityItem {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: LucideIcon;
}

export interface SocialContact {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactData {
  header: {
    title: string;
    description: string;
  };
  availability: AvailabilityItem[];
  methods: ContactMethod[];
  socials: SocialContact[];
  timezone: {
    location: string;
    timezone: string;
    availabilityWindow: string;
    responseTime: string;
  };
  faq: ContactFaqItem[];
  cta: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
}

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export type ContactFormField = keyof ContactFormValues;
