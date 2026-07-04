import { RotateCcw } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

type ErrorViewProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export function ErrorView({ error, reset }: ErrorViewProps) {
  return (
    <Container className="flex min-h-svh items-center justify-center py-24" size="sm">
      <div className="grid gap-6 text-center">
        <div className="grid gap-2">
          <p className="text-sm font-medium text-muted-foreground">Application error</p>
          <h1 className="text-2xl font-semibold tracking-normal text-foreground">
            Something went wrong.
          </h1>
          <p className="text-sm text-muted-foreground">
            {error.digest ? `Reference: ${error.digest}` : "The page can be retried safely."}
          </p>
        </div>
        <div className="flex justify-center">
          <Button type="button" onClick={reset}>
            <RotateCcw aria-hidden="true" />
            Retry
          </Button>
        </div>
      </div>
    </Container>
  );
}
