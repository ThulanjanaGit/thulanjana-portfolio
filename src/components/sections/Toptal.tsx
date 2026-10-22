import * as m from "motion/react-m";
import { TOPTAL_URL } from "../../data/profile";
import { fadeIn } from "../../utils/motion";
import SectionHeading from "../ui/SectionHeading";
import ToptalBadge from "../ui/ToptalBadge";

const Toptal = () => {
  return (
    <section
      id="toptal"
      aria-labelledby="toptal-heading"
      className="border-b border-neutral-900 pb-20"
    >
      <SectionHeading id="toptal-heading">
        Hire <span className="text-neutral-500">Me</span>
      </SectionHeading>
      <m.div {...fadeIn("left")} className="flex justify-center">
        {/* The site is dark only for now; use theme="light" on a light theme. */}
        <ToptalBadge href={TOPTAL_URL} theme="dark" />
      </m.div>
    </section>
  );
};

export default Toptal;
