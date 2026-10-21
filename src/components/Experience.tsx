import * as m from "motion/react-m";
import { EXPERIENCES } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";
import TagList from "./TagList";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-neutral-900 pb-4"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <ol>
        {EXPERIENCES.map((experience) => (
          <li
            key={`${experience.role}-${experience.year}`}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <m.div {...fadeIn("left")} className="w-full lg:w-1/5">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </m.div>
            <m.div {...fadeIn("right")} className="w-full max-w-3xl lg:w-4/5">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h3>
              <ul className="mb-4 list-disc space-y-1 pl-5 text-neutral-400">
                {experience.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <TagList items={experience.technologies} />
            </m.div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
