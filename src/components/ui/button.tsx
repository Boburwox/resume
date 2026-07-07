import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[var(--space-8)] font-semibold tracking-tight transition-all duration-[250ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-background)] hover:-translate-y-[2px] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#8B5CF6] via-[#5E6AD2] to-[#3B82F6] text-white shadow-[0_4px_16px_rgba(94,106,210,0.2)] hover:shadow-[0_6px_24px_rgba(94,106,210,0.3)] border-0",
        secondary:
          "bg-[var(--color-glass)] text-[var(--color-text-primary)] border border-[var(--color-glass-border)] shadow-[var(--shadow-soft)] backdrop-blur-[var(--blur-glass)] hover:bg-[var(--color-glass)]/90 hover:border-[var(--color-border-strong)]",
        outline:
          "border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-glass)] hover:border-[var(--color-border-strong)] shadow-[var(--shadow-soft)]",
        ghost:
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-glass)]",
        destructive:
          "bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger)]/90 shadow-[0_4px_12px_rgba(244,63,94,0.2)]",
      },
      size: {
        sm: "h-[42px] px-[var(--space-20)] text-[12px] rounded-[12px]",
        md: "h-[52px] px-[28px] text-[13px] rounded-[16px]",
        lg: "h-[52px] px-[28px] text-sm rounded-[16px]",
        icon: "h-[52px] w-[52px] rounded-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
