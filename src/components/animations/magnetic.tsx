"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticProps {
    children: ReactNode;
    strength?: number;
    className?: string;
}

export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 200, mass: 0.8 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (shouldReduceMotion || !ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Center coordinates of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Displacement
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        x.set(deltaX * strength);
        y.set(deltaY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={shouldReduceMotion ? {} : { x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
export default Magnetic;
