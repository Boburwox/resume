import type { ReactNode } from "react";

import { SkipLink } from "@/components/common/skip-link";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/features/footer/components/footer-section";
import { PageTransition } from "@/components/animations/page-transition";

type SiteShellProps = Readonly<{
  children: ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SkipLink />
      <div className="relative flex min-h-svh flex-col bg-background text-foreground">
        <Navbar />
        <main id="main-content" aria-label="Main content" className="flex-1 pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <FooterSection />
      </div>
    </>
  );
}

