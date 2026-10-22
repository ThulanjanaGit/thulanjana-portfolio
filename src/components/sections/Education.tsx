import { EDUCATION } from "../../data/education";
import { alphabetical } from "../../utils/alphabetical";
import { stagger } from "../../utils/stagger";
import { groupBy, LINEUP_GRID } from "../ui/lineup";
import SectionHeading from "../ui/SectionHeading";

const GROUPS = groupBy(EDUCATION, ({ location }) => location);

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
      {GROUPS.map(({ label: country, items }) => (
        <div key={country} className="mt-14 first:mt-0">
          <h3 data-reveal className="mb-2 text-lead text-muted">
            {country}
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
                      Skills gained: {alphabetical(skills).join(", ")}
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
