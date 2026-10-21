import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { fadeIn } from "../utils/motion";

interface TimelineItemProps {
  period: string;
  children: ReactNode;
}

const TimelineItem = ({ period, children }: TimelineItemProps) => {
  return (
    <li className="mb-8 flex flex-wrap lg:justify-center">
      <m.div {...fadeIn("left")} className="w-full lg:w-1/5">
        <p className="mb-2 text-sm text-neutral-400">{period}</p>
      </m.div>
      <m.div {...fadeIn("right")} className="w-full max-w-3xl lg:w-4/5">
        {children}
      </m.div>
    </li>
  );
};

export default TimelineItem;
