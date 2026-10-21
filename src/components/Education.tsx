import { EDUCATION } from "../constants";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-neutral-900 pb-4"
    >
      <SectionHeading id="education-heading">Education</SectionHeading>
      <ol>
        {EDUCATION.map((education) => (
          <TimelineItem key={education.degree} period={education.period}>
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="mb-3 text-sm text-purple-100">
              {education.institution} · {education.location}
            </p>
            <p className="text-neutral-400">{education.honours}</p>
          </TimelineItem>
        ))}
      </ol>
    </section>
  );
};

export default Education;
