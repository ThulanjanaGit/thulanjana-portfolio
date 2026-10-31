import { SKILL_GROUPS } from "../../data/skills";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={SECTION_FRAME}
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <dl className="grid gap-y-8 lg:gap-y-10">
        {SKILL_GROUPS.map(({ title, skills }, index) => (
          <div
            key={title}
            data-reveal
            style={stagger(index)}
            className="grid gap-x-gutter gap-y-2 lg:grid-cols-12"
          >
            <dt className="text-lead lg:col-span-4">{title}</dt>
            <dd className="lg:col-span-8">{skills.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skills;
