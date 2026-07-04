import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/constants/site";
import { fontVariables } from "@/lib/fonts";
import { createMetadata } from "@/lib/metadata";
import { createWebsiteJsonLd } from "@/lib/structured-data";
import { cn } from "@/utils/cn";
import { AppProviders } from "./providers";
import "@/styles/globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  colorScheme: "light dark",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const websiteJsonLd = createWebsiteJsonLd();

  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body className={cn(fontVariables, "min-h-svh bg-background font-sans antialiased")}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
