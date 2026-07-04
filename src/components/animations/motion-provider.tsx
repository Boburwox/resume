"use client";

import { LazyMotion, domMax } from "framer-motion";
import type { ReactNode } from "react";

interface MotionProviderProps {
    children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
    return (
        <LazyMotion features={domMax} strict={false}>
            {children}
        </LazyMotion>
    );
}
