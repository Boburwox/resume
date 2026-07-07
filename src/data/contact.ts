import { Clock3, Github, Instagram, Mail, MapPin, MessageCircle, Send, Sparkles, Users } from "lucide-react";
import type { ContactData } from "@/types/contact";

export const CONTACT_DATA: ContactData = {
  header: {
    title: "Let's translate ideas into code.",
    description:
      "Reach out for frontend engineering opportunities, open-source collaborations, frontend/prompt teaching invites, or to discuss building interesting visual products.",
  },
  availability: [
    {
      id: "opportunities",
      label: "Opportunities",
      value: "Available",
      description: "Open to full-time frontend engineering positions and serious product work.",
      icon: Sparkles,
    },
    {
      id: "collaboration",
      label: "Collaboration",
      value: "Open",
      description: "Interested in open-source React/Next.js systems and mentoring programs.",
      icon: Users,
    },
    {
      id: "response",
      label: "Response",
      value: "< 24h",
      description: "Usually replies within 24 hours to structured messages.",
      icon: Clock3,
    },
  ],
  methods: [
    {
      id: "email",
      title: "Email",
      description: "Best for detailed opportunities and project conversations.",
      href: "mailto:boburwox@gmail.com",
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
      id: "instagram",
      title: "Instagram",
      description: "Follow for personal work, updates, and photography.",
      href: "https://instagram.com/kh.boburwox",
      actionLabel: "Follow",
      icon: Instagram,
    },
    {
      id: "telegram",
      title: "Telegram",
      description: "Quick messages for collaboration and lightweight planning.",
      href: "https://t.me/boburwox",
      actionLabel: "Message",
      icon: MessageCircle,
    },
    {
      id: "location",
      title: "Location",
      description: "Based in Samarkand, Uzbekistan. Comfortable with remote work.",
      href: "#timezone",
      actionLabel: "View Timezone",
      icon: MapPin,
    },
  ],
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/Boburwox", icon: Github },
    { id: "telegram", label: "Telegram", href: "https://t.me/boburwox", icon: Send },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/kh.boburwox", icon: Instagram },
    { id: "email", label: "Email", href: "mailto:boburwox@gmail.com", icon: Mail },
  ],
  timezone: {
    location: "Samarkand, Uzbekistan",
    timezone: "Asia/Samarkand, UTC+5",
    availabilityWindow: "Weekdays, 09:00-19:00",
    responseTime: "Usually within 24 hours",
  },
  faq: [
    {
      id: "reply",
      question: "How quickly do you reply?",
      answer: "Most thoughtful messages get a response within 24 hours, depending on timezone and project detail.",
    },
    {
      id: "remote",
      question: "Do you work remotely?",
      answer: "Yes. Remote collaboration is preferred, with clear async communication and structured milestones.",
    },
    {
      id: "collaborate",
      question: "Can we collaborate?",
      answer: "Yes, especially on SaaS, frontend systems, open-source tools, React/Next.js architectures, and product ideas.",
    },
    {
      id: "stack",
      question: "What technologies do you specialize in?",
      answer: "Specializing in Next.js, React, TypeScript, Tailwind CSS, accessible UI systems, and robust frontend design systems.",
    },
  ],
  cta: {
    title: "Have an idea worth building?",
    description: "Send the context, goal, and timeline. I'll respond with the clearest next step.",
    href: "mailto:boburwox@gmail.com",
    label: "Start a Conversation",
  },
};
