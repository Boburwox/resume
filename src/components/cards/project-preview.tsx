"use client";

import { memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

function ProjectPreviewComponent({ src, alt, priority = false, className }: ProjectPreviewProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("group/preview relative overflow-hidden rounded-[var(--radius-xl)]", className)}>
      <motion.div
        {...(shouldReduceMotion ? {} : { whileHover: { scale: 1.06 } })}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--color-background)_100%)] opacity-80 transition-opacity duration-[var(--duration-normal)] group-hover/preview:opacity-95"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 border border-[var(--color-glass-border)]" />
    </div>
  );
}

export const ProjectPreview = memo(ProjectPreviewComponent);
