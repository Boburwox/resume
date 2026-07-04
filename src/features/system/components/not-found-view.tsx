import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";

export function NotFoundView() {
  return (
    <Container className="flex min-h-svh items-center justify-center py-24" size="sm">
      <div className="grid gap-6 text-center">
        <div className="grid gap-2">
          <p className="text-sm font-medium text-muted-foreground">404</p>
          <h1 className="text-2xl font-semibold tracking-normal text-foreground">
            Page not found.
          </h1>
          <p className="text-sm text-muted-foreground">
            The requested route is not available in this application shell.
          </p>
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href={routes.home}>
              <ArrowLeft aria-hidden="true" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
