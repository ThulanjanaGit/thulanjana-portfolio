import type { Variants } from "motion/react";
import * as m from "motion/react-m";
import { TECHNOLOGIES } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";

const BOB_DURATIONS = [3, 2.5, 2];

const iconVariants = (duration: number): Variants => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex flex-col items-center border-b border-neutral-900 pb-4"
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <m.ul
        {...fadeIn("left")}
        className="flex max-w-3xl flex-wrap justify-center gap-3 sm:gap-4"
      >
        {TECHNOLOGIES.map(({ name, icon: Icon, colorClass }, index) => (
          <m.li
            key={name}
            variants={iconVariants(BOB_DURATIONS[index % BOB_DURATIONS.length])}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="my-3 flex w-24 flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-3 text-center transition-colors hover:border-neutral-600 sm:w-28"
          >
            <Icon
              aria-hidden="true"
              className={`text-5xl sm:text-6xl ${colorClass}`}
            />
            <span className="text-sm leading-tight">{name}</span>
          </m.li>
        ))}
      </m.ul>
    </section>
  );
};

export default Technologies;
