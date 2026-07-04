import { siteConfig } from "@/constants/site";
import { env } from "@/lib/env";
import { CONTACT_DATA } from "@/data/contact";

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

export function createPersonJsonLd() {
  const socialUrls = CONTACT_DATA.socials.map((social) => social.href);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creator,
    url: env.siteUrl,
    description: siteConfig.description,
    sameAs: socialUrls,
    jobTitle: "Software Engineer",
    knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Software Engineering", "Product Design"],
  };
}

export function createWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.name,
    description: siteConfig.description,
    url: env.siteUrl,
    inLanguage: siteConfig.language,
  };
}

export function createProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteConfig.creator} - Developer Portfolio`,
    description: siteConfig.description,
    url: env.siteUrl,
    mainEntity: createPersonJsonLd(),
  };
}

export function createBreadcrumbListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: env.siteUrl,
      },
    ],
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: env.siteUrl,
    logo: `${env.siteUrl}/icon.svg`,
  };
}

export function createPortfolioGraphJsonLd() {
  const socialUrls = CONTACT_DATA.socials.map((social) => social.href);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${env.siteUrl}/#website`,
        url: env.siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
      },
      {
        "@type": "Person",
        "@id": `${env.siteUrl}/#person`,
        name: siteConfig.creator,
        url: env.siteUrl,
        sameAs: socialUrls,
        jobTitle: "Software Engineer",
        knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Software Engineering", "Product Design"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${env.siteUrl}/#profile-page`,
        url: env.siteUrl,
        name: `${siteConfig.creator}'s Developer Profile`,
        description: siteConfig.description,
        mainEntity: {
          "@id": `${env.siteUrl}/#person`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${env.siteUrl}/#webpage`,
        url: env.siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${env.siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: env.siteUrl,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${env.siteUrl}/#organization`,
        name: siteConfig.name,
        url: env.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${env.siteUrl}/icon.svg`,
          width: "512",
          height: "512"
        }
      }
    ],
  };
}
