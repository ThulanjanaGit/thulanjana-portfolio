import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { fadeIn } from "../../utils/motion";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
}

const SectionHeading = ({ id, children }: SectionHeadingProps) => {
  return (
    <m.h2 id={id} {...fadeIn("top")} className="my-20 text-center text-4xl">
      {children}
    </m.h2>
  );
};

export default SectionHeading;
