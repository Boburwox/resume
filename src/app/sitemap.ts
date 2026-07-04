import type { MetadataRoute } from "next";

import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.siteUrl}${routes.home}`,
      lastModified: new Date(siteConfig.updatedAt),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
