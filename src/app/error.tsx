"use client";

import { ErrorView } from "@/features/system/components/error-view";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return <ErrorView error={error} reset={reset} />;
}
