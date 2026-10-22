import type { CSSProperties } from "react";

// Position in an entrance sequence; index.css delays each step by it.
export const stagger = (index: number) => ({ "--i": index }) as CSSProperties;
