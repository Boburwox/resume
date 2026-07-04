import type { ReactNode } from "react";

import { SkipLink } from "@/components/common/skip-link";

type SiteShellProps = Readonly<{
  children: ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SkipLink />
      <div className="relative flex min-h-svh flex-col bg-background text-foreground">
        <main id="main-content" aria-label="Main content" className="flex-1">
          {children}
        </main>
      </div>
    </>
  );
}
