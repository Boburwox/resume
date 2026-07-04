"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export function FloatingShapes() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20, mass: 0.6 });

  const shapeOneX = useTransform(springX, [-1, 1], [-18, 18]);
  const shapeOneY = useTransform(springY, [-1, 1], [-18, 18]);
  const shapeTwoX = useTransform(springX, [-1, 1], [14, -14]);
  const shapeTwoY = useTransform(springY, [-1, 1], [14, -14]);
  const shapeThreeX = useTransform(springX, [-1, 1], [-10, 10]);
  const shapeThreeY = useTransform(springY, [-1, 1], [10, -10]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [shouldReduceMotion, pointerX, pointerY]);

  return (
    <div aria-hidden="true" className="relative h-full w-full">
      <motion.div
        style={{ x: shapeOneX, y: shapeOneY }}
        {...(shouldReduceMotion ? {} : { animate: { y: [0, -20, 0] } })}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-[var(--radius-2xl)] bg-[var(--color-accent)] opacity-30 blur-[var(--blur-glass)]"
      />
      <motion.div
        style={{ x: shapeTwoX, y: shapeTwoY }}
        {...(shouldReduceMotion ? {} : { animate: { y: [0, 24, 0] } })}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-8 top-1/2 h-48 w-48 rounded-[var(--radius-full)] bg-[var(--color-success)] opacity-20 blur-[var(--blur-glass)]"
      />
      <motion.div
        style={{ x: shapeThreeX, y: shapeThreeY }}
        {...(shouldReduceMotion ? {} : { animate: { y: [0, -16, 0] } })}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-8 h-40 w-40 rounded-[var(--radius-2xl)] bg-[var(--color-primary)] opacity-10 blur-[var(--blur-glass)]"
      />
    </div>
  );
}
