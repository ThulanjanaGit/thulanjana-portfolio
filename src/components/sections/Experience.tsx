import { useState } from "react";
import { EDUCATION } from "../../data/education";
import { EXPERIENCES } from "../../data/experience";
import type { Highlight } from "../../types";
import { stagger } from "../../utils/stagger";
import SectionHeading from "../ui/SectionHeading";
import TechFilter from "../ui/TechFilter";

interface Row {
  title: string;
  place: string;
  period: string;
  country: string;
  highlights: Highlight[];
  note?: string;
  technologies: string[];
}

const ROWS: Row[] = [
  ...EXPERIENCES.map(
    ({ role, company, location, period, highlights, technologies }) => ({
      title: role,
      place: company,
      period,
      country: location,
      highlights,
      technologies,
    }),
  ),
  ...EDUCATION.map(({ degree, institution, location, period, honours }) => ({
    title: degree,
    place: institution,
    period,
    country: location,
    highlights: [],
    note: honours,
    technologies: [],
  })),
];

// Rows grouped by country, in the order each country first appears.
const GROUPS = ROWS.reduce<{ country: string; rows: Row[] }[]>(
  (groups, row) => {
    const group = groups.find(({ country }) => country === row.country);
    if (group) group.rows.push(row);
    else groups.push({ country: row.country, rows: [row] });
    return groups;
  },
  [],
);

// The summary and the opened details share one grid, so the details line up
// with the row; the last column holds the + / − indicator. Role, company and
// dates fit on one line only from 1280px (measured at lead size); below that
// each row takes two lines. The dates column is a fixed 9em, not auto, so the
// company column starts at the same place on every row.
const ROW_GRID =
  "grid grid-cols-[1fr_1.5rem] gap-x-gutter xl:grid-cols-[1fr_1fr_9em_1.5rem]";

interface LineupRowProps {
  index: number;
  row: Row;
  open: boolean;
  selected: string | null;
}

const LineupRow = ({ index, row, open, selected }: LineupRowProps) => {
  const { title, place, period, highlights, note, technologies } = row;
  const dimmed = selected !== null && !technologies.includes(selected);

  return (
    <li data-reveal style={stagger(index + 1)}>
      <details
        open={open}
        className={`group [transition:color_var(--t-hover)_ease] ${dimmed ? "text-muted" : ""}`}
      >
        <summary
          aria-label={`${title} at ${place}, ${period}`}
          className={`${ROW_GRID} cursor-pointer list-none items-baseline py-4 xl:text-lead [&::-webkit-details-marker]:hidden`}
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
            <span>{place}</span>
            <span className="whitespace-nowrap tabular-nums xl:text-right">
              {period}
            </span>
          </span>
        </summary>
        <div className={`${ROW_GRID} pb-10`}>
          <div className="col-span-2 xl:col-span-3">
            {technologies.length > 0 && (
              <p className="mb-6 text-small text-muted">
                Built with{" "}
                {technologies.map((technology, index) => (
                  <span key={technology}>
                    {index > 0 && ", "}
                    {technology === selected ? (
                      <mark className="bg-field px-1 text-field-ink">
                        {technology}
                      </mark>
                    ) : (
                      technology
                    )}
                  </span>
                ))}
              </p>
            )}
            {highlights.length > 0 && (
              <ul className="grid gap-x-gutter gap-y-4 md:grid-cols-2 xl:grid-cols-3">
                {highlights.map(({ title: highlight, description }) => (
                  <li key={highlight}>
                    <span className="font-medium">{highlight}:</span>{" "}
                    {description}
                  </li>
                ))}
              </ul>
            )}
            {note && <p>{note}</p>}
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
      className="px-page py-chapter"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <div data-reveal style={stagger(1)}>
        <TechFilter selected={selected} onSelect={setSelected} />
      </div>
      <div className="mt-16">
        {GROUPS.map(({ country, rows }) => (
          <div key={country} className="mt-14 first:mt-0">
            <h3 data-reveal className="mb-2 text-lead text-muted">
              {country}
            </h3>
            <ul>
              {rows.map((row, index) => (
                <LineupRow
                  key={`${row.title}-${row.period}`}
                  index={index}
                  row={row}
                  open={row === ROWS[0]}
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
