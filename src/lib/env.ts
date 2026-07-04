const fallbackSiteUrl = "http://localhost:3000";

function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  try {
    return new URL(value).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const env = {
  siteUrl: getSiteUrl(),
} as const;
