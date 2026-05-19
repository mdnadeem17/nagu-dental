// src/components/site/SectionWrapper.tsx
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

// Generic wrapper that fades/slide-ups when scrolled into view.
// It respects prefers-reduced-motion media query for accessibility.
export function SectionWrapper({ children, className = "", delay = 0 }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const variant = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: custom },
        }),
      };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      variants={variant}
      className={className}
    >
      {children}
    </motion.section>
  );
}
