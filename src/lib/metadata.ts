import type { Metadata } from "next";

import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { env } from "@/lib/env";

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
  imageUrl?: string;
};

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const title = options.title ?? siteConfig.name;
  const description = options.description ?? siteConfig.description;
  const canonical = new URL(options.path ?? routes.home, env.siteUrl).toString();
  const keywords = options.keywords ?? [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Developer Portfolio",
    "Software Engineer",
    "Web Development",
    "SaaS",
    "Frontend Systems",
    "Accessibility",
    "CareOne Product"
  ];
  const imageUrl = options.imageUrl ?? `${env.siteUrl}/icon.svg`;

  return {
    metadataBase: new URL(env.siteUrl),
    applicationName: siteConfig.name,
    title: options.title
      ? `${title} | ${siteConfig.name}`
      : {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
      },
    description,
    keywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: siteConfig.creator,
    },
    robots: {
      index: !options.noIndex,
      follow: !options.noIndex,
      googleBot: {
        index: !options.noIndex,
        follow: !options.noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
      ],
    },
    manifest: "/manifest.webmanifest",
  };
}
