import type { MotionProps } from "motion/react";

type Direction = "top" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  top: { y: -100 },
  left: { x: -100 },
  right: { x: 100 },
};

// Fades an element in from one side the first time it scrolls into view.
export const fadeIn = (from: Direction, delay = 0): MotionProps => ({
  initial: { opacity: 0, ...offsets[from] },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, delay },
});
