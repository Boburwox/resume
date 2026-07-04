import type { Route } from "next";

export type NavigationItem = {
  label: string;
  href: Route;
  external?: boolean;
};
