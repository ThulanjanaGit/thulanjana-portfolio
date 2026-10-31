import { EDUCATION, LANGUAGES } from "../../data/education";
import type { Education as Qualification } from "../../types";
import { stagger } from "../../utils/stagger";
import { groupBy, LINEUP_GRID } from "../ui/lineup";
import SectionHeading from "../ui/SectionHeading";

// Grouped by country, then the languages as one more group: language, level
// and CEFR level take the degree, institution and dates columns.
const GROUPS: { label: string; items: Omit<Qualification, "location">[] }[] = [
  ...groupBy(EDUCATION, ({ location }) => location),
  {
    label: "Languages",
    items: LANGUAGES.map(({ name, level, cefr }) => ({
      degree: name,
      institution: level,
      period: cefr,
    })),
  },
];

// Set like the experience line-up, so the two read as one history.
const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      data-chapter="surface"
      className="px-page py-chapter"
    >
      <SectionHeading id="education-heading">Education</SectionHeading>
      {GROUPS.map(({ label, items }) => (
        <div key={label} className="mt-14 first:mt-0">
          <h3 data-reveal className="mb-2 text-lead text-muted">
            {label}
          </h3>
          <ul>
            {items.map(
              ({ degree, honours, institution, period, skills }, index) => (
                <li
                  key={degree}
                  data-reveal
                  style={stagger(index + 1)}
                  className={`${LINEUP_GRID} items-baseline py-4 xl:text-lead`}
                >
                  <span className="text-lead">{degree}</span>
                  <span className="col-start-1 mt-1 flex justify-between gap-4 text-small text-muted sm:text-body xl:contents xl:text-lead xl:text-inherit">
                    <span>{institution}</span>
                    <span className="whitespace-nowrap tabular-nums xl:text-right">
                      {period}
                    </span>
                  </span>
                  {honours && (
                    <span className="col-span-2 col-start-1 mt-2 text-muted xl:col-span-3 xl:text-body">
                      {honours}
                    </span>
                  )}
                  {skills && (
                    <span className="col-span-2 col-start-1 mt-2 text-small text-muted xl:col-span-3">
                      Skills gained: {skills.join(", ")}
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Education;
