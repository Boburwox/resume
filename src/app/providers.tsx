"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { THEME_STORAGE_KEY } from "@/constants/theme";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      storageKey={THEME_STORAGE_KEY}
    >
      {children}
    </NextThemeProvider>
  );
}
