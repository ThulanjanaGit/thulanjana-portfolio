import { Fragment, useState } from "react";
import { EXPERIENCES } from "../../data/experience";
import type { Experience as Role } from "../../types";
import { stagger } from "../../utils/stagger";
import { groupBy, LINEUP_GRID } from "../ui/lineup";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";
import TechFilter from "../ui/TechFilter";

const GROUPS = groupBy(EXPERIENCES, ({ location }) => location);

interface LineupRowProps {
  index: number;
  role: Role;
  open: boolean;
  selected: string | null;
}

const LineupRow = ({ index, role, open, selected }: LineupRowProps) => {
  const { role: title, company, period, highlights, technologies } = role;
  const dimmed = selected !== null && !technologies.includes(selected);

  return (
    <li data-reveal style={stagger(index + 1)}>
      <details
        open={open}
        className={`group [transition:color_var(--t-hover)_ease] ${dimmed ? "text-muted" : ""}`}
      >
        <summary
          aria-label={`${title} at ${company}, ${period}`}
          className={`${LINEUP_GRID} cursor-pointer list-none items-baseline py-4 xl:text-lead [&::-webkit-details-marker]:hidden`}
        >
          <span className="text-lead">{title}</span>
          <span
            aria-hidden="true"
            className="col-start-2 row-start-1 text-right text-lead text-muted xl:col-start-4"
          >
            <span className="group-open:hidden">+</span>
            <span className="hidden group-open:inline">−</span>
          </span>
          <span className="col-start-1 mt-1 flex justify-between gap-4 text-small text-muted sm:text-body xl:contents xl:text-lead xl:text-inherit">
            <span>{company}</span>
            <span className="whitespace-nowrap tabular-nums xl:text-right">
              {period}
            </span>
          </span>
        </summary>
        <div className={`${LINEUP_GRID} pb-10`}>
          <div className="col-span-2 xl:col-span-3">
            <p className="mb-6 text-small text-muted">
              Built with{" "}
              {technologies.map((technology, position) => (
                <Fragment key={technology}>
                  {position > 0 && ", "}
                  {technology === selected ? (
                    <mark className="bg-ink px-1 text-ground">
                      {technology}
                    </mark>
                  ) : (
                    technology
                  )}
                </Fragment>
              ))}
            </p>
            <ul className="grid gap-x-gutter gap-y-4 md:grid-cols-2 xl:grid-cols-3">
              {highlights.map(({ title: highlight, description }) => (
                <li key={highlight}>
                  <span className="font-medium">{highlight}:</span>{" "}
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </li>
  );
};

const Experience = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      data-chapter="surface"
      className={SECTION_FRAME}
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <div data-reveal style={stagger(1)}>
        <TechFilter selected={selected} onSelect={setSelected} />
      </div>
      <div className="mt-16">
        {GROUPS.map(({ label: country, items }) => (
          <div key={country} className="mt-14 first:mt-0">
            <h3 data-reveal className="mb-2 text-lead text-muted">
              {country}
            </h3>
            <ul>
              {items.map((role, index) => (
                <LineupRow
                  key={`${role.role}-${role.period}`}
                  index={index}
                  role={role}
                  open={role === EXPERIENCES[0]}
                  selected={selected}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
