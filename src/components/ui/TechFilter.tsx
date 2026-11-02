import type { ReactNode } from "react";
import { EDUCATION } from "../../data/education";
import { EXPERIENCES } from "../../data/experience";
import { projectPath, VISIBLE_PROJECTS } from "../../data/projects";
import { useHydrated } from "../../hooks/useHydrated";

const list = new Intl.ListFormat("en-GB", { type: "conjunction" });
const either = new Intl.ListFormat("en-GB", { type: "disjunction" });

// Every technology from the roles, in the order it first appears, so the
// current role's main stack leads.
const TECHNOLOGIES = [
  ...new Set(EXPERIENCES.flatMap(({ technologies }) => technologies)),
];

// The items that use any of the picked technologies, each with the picks it
// uses.
const matching = <T,>(
  items: T[],
  technologiesOf: (item: T) => string[] | undefined,
  selected: string[],
) =>
  items.flatMap((item) => {
    const used = selected.filter((technology) =>
      technologiesOf(item)?.includes(technology),
    );
    return used.length > 0 ? [{ item, used }] : [];
  });

// "no projects", "1 role", "4 roles"
const count = (total: number, noun: string) =>
  `${total === 0 ? "no" : total} ${noun}${total === 1 ? "" : "s"}`;

interface Result {
  key: string;
  name: ReactNode;
  used: string[];
}

// Where the picked technologies were used, under Experience, Personal
// projects and Education (the degree's skills).
const resultsFor = (selected: string[]) => [
  {
    label: "Experience",
    noun: "role",
    items: matching(
      EXPERIENCES,
      ({ technologies }) => technologies,
      selected,
    ).map<Result>(({ item: { role, company, period }, used }) => ({
      key: `${role}-${period}`,
      name: (
        <>
          {role} at <span translate="no">{company}</span>
        </>
      ),
      used,
    })),
  },
  {
    label: "Personal projects",
    noun: "personal project",
    items: matching(
      VISIBLE_PROJECTS,
      ({ technologies }) => technologies,
      selected,
    ).map<Result>(({ item: { slug, title }, used }) => ({
      key: slug,
      name: (
        <a
          href={projectPath(slug)}
          className="underline hover:decoration-[0.11em]"
        >
          {title}
        </a>
      ),
      used,
    })),
  },
  {
    label: "Education",
    noun: "qualification",
    items: matching(EDUCATION, ({ skills }) => skills, selected).map<Result>(
      ({ item: { degree }, used }) => ({ key: degree, name: degree, used }),
    ),
  },
];

// Small on phones, so the whole list takes about half a screen.
const TOGGLE_CLASS =
  "min-h-7 cursor-pointer bg-ground px-2 text-small underline-offset-[0.18em] [transition:background-color_var(--t-hover)_ease,color_var(--t-hover)_ease,transform_var(--t-press)_var(--ease-out)] hover:underline active:scale-[0.97] aria-pressed:bg-ink aria-pressed:text-ground sm:min-h-11 sm:px-3 sm:text-body";

interface TechFilterProps {
  selected: string[];
  onSelect: (technologies: string[]) => void;
}

// A toggle per technology; any number can be on, and a role, project or
// degree matches when it uses any of them. "All technologies" clears the
// picks. Before scripts run it is a plain list.
const TechFilter = ({ selected, onSelect }: TechFilterProps) => {
  const hydrated = useHydrated();
  const results = resultsFor(selected);

  const toggle = (technology: string) =>
    onSelect(
      selected.includes(technology)
        ? selected.filter((picked) => picked !== technology)
        : [...selected, technology],
    );

  return (
    <div>
      {hydrated ? (
        <fieldset>
          <legend className="mb-4 font-medium">Filter by technology</legend>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <button
              type="button"
              aria-pressed={selected.length === 0}
              onClick={() => onSelect([])}
              className={TOGGLE_CLASS}
            >
              All technologies
            </button>
            {TECHNOLOGIES.map((technology) => (
              <button
                key={technology}
                type="button"
                translate="no"
                aria-pressed={selected.includes(technology)}
                onClick={() => toggle(technology)}
                className={TOGGLE_CLASS}
              >
                {technology}
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <>
          <p id="tech-filter-label" className="mb-4 font-medium">
            Technologies
          </p>
          <ul
            aria-labelledby="tech-filter-label"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {TECHNOLOGIES.map((technology) => (
              <li key={technology} translate="no">
                {technology}
              </li>
            ))}
          </ul>
        </>
      )}
      {/* Only the summary is a live region, so the prompt is not read out on
          load and the lists below are not read out on every pick. */}
      <div className="mt-6">
        {hydrated && selected.length === 0 && (
          <p>Pick one or more to see where I used them.</p>
        )}
        {/* The matches sit on the ground tone, like a project tile, so they
            read apart from the line-up below. */}
        <div className={selected.length > 0 ? "bg-ground p-gutter" : undefined}>
          {/* "React or Python: 4 roles, 2 personal projects and 1
              qualification." */}
          <p aria-live="polite" className="font-medium">
            {selected.length > 0 &&
              `${either.format(selected)}: ${list.format(
                results.map(({ items, noun }) => count(items.length, noun)),
              )}.`}
          </p>
          {selected.length > 0 && (
            <dl className="mt-6 grid gap-x-gutter gap-y-6 md:grid-cols-3">
              {results.map(({ label, items }) => (
                <div key={label}>
                  <dt className="mb-1 text-muted">{label}</dt>
                  {items.length === 0 ? (
                    <dd className="text-muted">None</dd>
                  ) : (
                    items.map(({ key, name, used }) => (
                      <dd key={key} className="mt-2 first-of-type:mt-0">
                        {name}
                        {selected.length > 1 && (
                          <span
                            translate="no"
                            className="block text-small text-muted"
                          >
                            {used.join(", ")}
                          </span>
                        )}
                      </dd>
                    ))
                  )}
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechFilter;
