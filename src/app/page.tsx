import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <Container className="flex min-h-svh items-center justify-center py-24" size="sm">
      <h1 className="text-center text-balance text-xl font-medium tracking-normal text-foreground sm:text-2xl">
        Portfolio Foundation Ready
      </h1>
    </Container>
  );
}
