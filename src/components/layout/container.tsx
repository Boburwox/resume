import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const containerVariants = cva("mx-auto w-full px-container", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

type ContainerProps = React.ComponentProps<"div"> & VariantProps<typeof containerVariants>;

export function Container({ className, size, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />;
}
