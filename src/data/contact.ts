import { Clock3, Github, Linkedin, Mail, MapPin, MessageCircle, Send, Sparkles, Users } from "lucide-react";
import type { ContactData } from "@/types/contact";

export const CONTACT_DATA: ContactData = {
  header: {
    title: "Let&apos;s turn a good idea into a shipped product.",
    description:
      "Reach out for engineering opportunities, product collaborations, open-source work, or a focused conversation about building useful software.",
  },
  availability: [
    {
      id: "opportunities",
      label: "Opportunities",
      value: "Available",
      description: "Open to full-time roles, internships, and serious product teams.",
      icon: Sparkles,
    },
    {
      id: "collaboration",
      label: "Collaboration",
      value: "Open",
      description: "Interested in open-source, SaaS, AI, and healthcare product work.",
      icon: Users,
    },
    {
      id: "response",
      label: "Response",
      value: "24-48h",
      description: "Clear messages with context get the fastest response.",
      icon: Clock3,
    },
  ],
  methods: [
    {
      id: "email",
      title: "Email",
      description: "Best for detailed opportunities and project conversations.",
      href: "mailto:hello@example.com",
      actionLabel: "Send Email",
      icon: Mail,
    },
    {
      id: "github",
      title: "GitHub",
      description: "Review code, repositories, and public engineering activity.",
      href: "https://github.com/Boburwox",
      actionLabel: "View GitHub",
      icon: Github,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Connect for professional updates and hiring conversations.",
      href: "https://linkedin.com",
      actionLabel: "Connect",
      icon: Linkedin,
    },
    {
      id: "telegram",
      title: "Telegram",
      description: "Quick messages for collaboration and lightweight planning.",
      href: "https://t.me",
      actionLabel: "Message",
      icon: MessageCircle,
    },
    {
      id: "location",
      title: "Location",
      description: "Based in Uzbekistan and comfortable with remote teams.",
      href: "#timezone",
      actionLabel: "View Timezone",
      icon: MapPin,
    },
  ],
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/Boburwox", icon: Github },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { id: "telegram", label: "Telegram", href: "https://t.me", icon: Send },
    { id: "email", label: "Email", href: "mailto:hello@example.com", icon: Mail },
  ],
  timezone: {
    location: "Uzbekistan",
    timezone: "Asia/Tashkent, UTC+5",
    availabilityWindow: "Weekdays, 09:00-19:00",
    responseTime: "Usually within 24-48 hours",
  },
  faq: [
    {
      id: "reply",
      question: "How quickly do you reply?",
      answer: "Most thoughtful messages get a response within 24-48 hours, depending on timezone and project detail.",
    },
    {
      id: "remote",
      question: "Do you work remotely?",
      answer: "Yes. Remote collaboration is preferred, with clear async communication and structured milestones.",
    },
    {
      id: "collaborate",
      question: "Can we collaborate?",
      answer: "Yes, especially on SaaS, frontend systems, open-source tools, AI workflows, and healthcare product ideas.",
    },
    {
      id: "stack",
      question: "What technologies do you specialize in?",
      answer: "The strongest focus is Next.js, React, TypeScript, Tailwind CSS, accessible UI, and product-grade frontend architecture.",
    },
  ],
  cta: {
    title: "Have an idea worth building?",
    description: "Send the context, goal, and timeline. I&apos;ll respond with the clearest next step.",
    href: "mailto:hello@example.com",
    label: "Start a Conversation",
  },
};
