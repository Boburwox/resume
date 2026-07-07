import type { ReactNode } from "react";

import { SkipLink } from "@/components/common/skip-link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type SiteShellProps = Readonly<{
  children: ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SkipLink />
      <div className="relative flex min-h-svh flex-col bg-background text-foreground">
        <Navbar />
        <main id="main-content" aria-label="Main content" className="flex-1 pt-12 md:pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
