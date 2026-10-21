import { EXPERIENCES } from "../constants";
import SectionHeading from "./SectionHeading";
import TagList from "./TagList";
import TimelineItem from "./TimelineItem";

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
          <TimelineItem
            key={`${experience.role}-${experience.period}`}
            period={experience.period}
          >
            <h3 className="font-semibold">{experience.role}</h3>
            <p className="mb-3 text-sm text-purple-100">
              {experience.company} · {experience.location}
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5 text-neutral-400">
              {experience.highlights.map(({ title, description }) => (
                <li key={title}>
                  <strong className="font-medium text-neutral-300">
                    {title}:
                  </strong>{" "}
                  {description}
                </li>
              ))}
            </ul>
            <TagList items={experience.technologies} />
          </TimelineItem>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
