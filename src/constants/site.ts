import type { SiteConfig } from "@/types/site";

export const siteConfig = {
  name: "Personal Portfolio",
  shortName: "Portfolio",
  description: "Production-ready premium developer portfolio foundation.",
  language: "en",
  locale: "en_US",
  creator: "Portfolio Owner",
  updatedAt: "2026-07-03T00:00:00.000Z",
} as const satisfies SiteConfig;
