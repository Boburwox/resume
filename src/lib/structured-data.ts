import { siteConfig } from "@/constants/site";
import { env } from "@/lib/env";

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: env.siteUrl,
    inLanguage: siteConfig.language,
  };
}
