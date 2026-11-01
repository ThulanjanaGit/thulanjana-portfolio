import type { CSSProperties, ReactNode } from "react";
import { projectPath, VISIBLE_PROJECTS } from "../data/projects";
import type { Project } from "../types";
import { stagger } from "../utils/stagger";

type Screen = Project["screens"][number];

// The widths pictures are shown at, so the browser picks the right file. The
// cover spans the column; the screens follow the grid below.
const SIZES = {
  full: "(min-width: 1440px) 1376px, 96vw",
  wide: "(min-width: 1440px) 907px, (min-width: 768px) 64vw, 96vw",
  half: "(min-width: 1440px) 672px, (min-width: 768px) 47vw, 96vw",
  phone: "(min-width: 1440px) 262px, (min-width: 768px) 19vw, 58vw",
};

const linkClass =
  "inline-flex min-h-11 items-center underline hover:decoration-[0.11em]";

// "https://www.iihrm.biz/" reads as "iihrm.biz".
const host = (link: string) => new URL(link).host.replace(/^www\./, "");

// Screens sit in rows of two, in data order.
const rows = (screens: Screen[]) =>
  Array.from({ length: Math.ceil(screens.length / 2) }, (_, index) =>
    screens.slice(index * 2, index * 2 + 2),
  );

// From 768px a desktop page takes 8 of the 12 columns beside a phone screen,
// whose picture (60% of 4 columns) is then as tall as the page; 6 beside
// another page; all 12 alone. Below 768px everything stacks.
const cell = (screen: Screen, row: Screen[]) => {
  if (screen.image.phone) {
    return row.length === 1 ? "md:col-span-4 md:col-start-5" : "md:col-span-4";
  }
  if (row.length === 1) return "md:col-span-12";
  return row.some(({ image }) => image.phone)
    ? "md:col-span-8"
    : "md:col-span-6";
};

const sizes = (screen: Screen, row: Screen[]) => {
  if (screen.image.phone) return SIZES.phone;
  if (row.length === 1) return SIZES.full;
  return row.some(({ image }) => image.phone) ? SIZES.wide : SIZES.half;
};

interface PartProps {
  id: string;
  title: string;
  children: ReactNode;
}

// A part of the story: its name on the left, the text in the other columns.
const Part = ({ id, title, children }: PartProps) => (
  <section
    aria-labelledby={id}
    className="grid gap-x-gutter gap-y-6 lg:grid-cols-12"
  >
    <h2 id={id} data-reveal className="text-lead lg:col-span-4">
      {title}
    </h2>
    <div data-reveal style={stagger(1)} className="lg:col-span-8">
      {children}
    </div>
  </section>
);

interface CaseStudyProps {
  project: Project;
}

const CaseStudy = ({ project }: CaseStudyProps) => {
  const {
    title,
    kind,
    summary,
    year,
    role,
    link,
    technologies,
    cover,
    brief,
    build,
    screens,
    result,
  } = project;
  const next =
    VISIBLE_PROJECTS[
      (VISIBLE_PROJECTS.indexOf(project) + 1) % VISIBLE_PROJECTS.length
    ];

  // On phones the short facts share a row and the long ones take the width.
  const facts = [
    { label: "Year", value: year, span: "" },
    { label: "Type", value: kind, span: "" },
    { label: "Role", value: role, span: "col-span-2 sm:col-span-1" },
    {
      label: "Built with",
      value: <span translate="no">{technologies.join(", ")}</span>,
      span: "col-span-2 sm:col-span-1",
    },
    {
      label: "Live site",
      value: (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          translate="no"
          className="break-all underline hover:decoration-[0.11em]"
        >
          {host(link)}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ),
      span: "col-span-2 sm:col-span-1",
    },
  ];

  return (
    <article aria-labelledby="project-title">
      {/* Rises in on load, like the hero. The top padding clears the
          header. */}
      <header className="px-page pt-[calc(5.25rem+var(--spacing-chapter))] pb-chapter">
        <a
          href="/#projects"
          data-load
          style={{ "--d": "0ms" } as CSSProperties}
          className={linkClass}
        >
          All projects
        </a>
        <h1
          id="project-title"
          data-load
          style={{ "--d": "80ms" } as CSSProperties}
          className="mt-4 text-head"
        >
          {title}
        </h1>
        <p
          data-load
          style={{ "--d": "160ms" } as CSSProperties}
          className="mt-6 max-w-[42ch] text-lead"
        >
          {summary}
        </p>
        {/* From 1024px one row, where the year and the address keep their
            own width and the rest share the space. */}
        <dl
          data-load
          style={{ "--d": "240ms" } as CSSProperties}
          className="mt-12 grid grid-cols-2 gap-x-gutter gap-y-6 lg:grid-cols-[auto_1fr_1fr_1fr_auto]"
        >
          {facts.map(({ label, value, span }) => (
            <div key={label} className={span}>
              <dt className="text-muted">{label}</dt>
              <dd className="tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div data-chapter="surface" className="px-page py-chapter">
        <figure data-reveal>
          <div data-shutter>
            <img
              src={cover.src}
              srcSet={cover.srcSet}
              sizes={SIZES.full}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              fetchPriority="high"
              decoding="async"
              className="w-full"
            />
          </div>
        </figure>
      </div>

      <div className="grid gap-y-chapter px-page py-chapter">
        <Part id="brief-heading" title="The brief">
          <div className="max-w-[62ch] space-y-[0.9em]">
            {brief.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Part>
        <Part id="build-heading" title="The build">
          <ul className="grid gap-x-gutter gap-y-8 md:grid-cols-2">
            {build.map(({ title: highlight, description }) => (
              <li key={highlight}>
                <h3 className="font-medium">{highlight}</h3>
                <p className="mt-1">{description}</p>
              </li>
            ))}
          </ul>
        </Part>
      </div>

      {screens.length > 0 && (
        <section
          aria-labelledby="screens-heading"
          data-chapter="surface"
          className="grid gap-y-16 px-page py-chapter md:gap-y-20"
        >
          <h2 id="screens-heading" className="sr-only">
            Screens
          </h2>
          {rows(screens).map((row) => (
            <div
              key={row[0].image.src}
              className="grid gap-x-gutter gap-y-12 md:grid-cols-12 md:items-start"
            >
              {row.map((screen, index) => (
                <figure
                  key={screen.image.src}
                  data-reveal
                  style={stagger(index)}
                  className={cell(screen, row)}
                >
                  <div className={screen.image.phone ? "mx-auto w-3/5" : ""}>
                    <div data-shutter style={stagger(index)}>
                      <img
                        src={screen.image.src}
                        srcSet={screen.image.srcSet}
                        sizes={sizes(screen, row)}
                        alt={screen.image.alt}
                        width={screen.image.width}
                        height={screen.image.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-small text-muted">
                      {screen.caption}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </section>
      )}

      <div className="px-page py-chapter">
        <Part id="result-heading" title="The result">
          <div className="max-w-[62ch] space-y-[0.9em]">
            {result.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} mt-4`}
          >
            {/* One flex item, so the space before the address stays. */}
            <span>
              Visit <span translate="no">{host(link)}</span>
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Part>
      </div>

      {next !== project && (
        <nav
          aria-labelledby="next-heading"
          data-chapter="invert"
          className="px-page py-chapter"
        >
          <h2 id="next-heading" className="text-lead text-muted">
            Next project
          </h2>
          <a
            href={projectPath(next.slug)}
            className="mt-4 inline-block text-head underline hover:decoration-[0.11em]"
          >
            {next.title}
          </a>
          <p className="mt-4 text-muted">{next.kind}</p>
        </nav>
      )}
    </article>
  );
};

export default CaseStudy;
