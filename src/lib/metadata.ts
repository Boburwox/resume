import type { Metadata } from "next";

import { routes } from "@/constants/routes";
import { siteConfig } from "@/constants/site";
import { env } from "@/lib/env";

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const title = options.title ?? siteConfig.name;
  const description = options.description ?? siteConfig.description;
  const canonical = new URL(options.path ?? routes.home, env.siteUrl).toString();

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      icon: "/icon.svg",
      apple: "/icon.svg",
    },
    manifest: "/manifest.webmanifest",
  };
}
