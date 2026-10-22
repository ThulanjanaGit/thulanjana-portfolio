import { VISIBLE_PROJECTS } from "../../data/projects";
import { alphabetical } from "../../utils/alphabetical";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";

// Tiles step down like a staircase. With two columns the heading runs across
// the top and the second column starts one step lower. From 1280px, three or
// more projects take three columns with the heading in the first cell, the
// next two starting one and two steps lower; two projects keep two columns so
// no column stands empty. On phones the pictures alternate sides instead.
// Class names stay whole so Tailwind can find them.
const THREE_COLUMNS = VISIBLE_PROJECTS.length >= 3;

const tileOffset = (index: number) => {
  if (!THREE_COLUMNS) return index % 2 === 1 ? "sm:mt-(--step)" : "";
  const twoColumns = index % 2 === 1 ? "sm:max-xl:mt-(--step)" : "";
  const cell = (index + 1) % 3;
  const threeColumns =
    cell === 1
      ? "xl:mt-(--step)"
      : cell === 2
        ? "xl:mt-[calc(var(--step)*2)]"
        : "";
  return `${twoColumns} ${threeColumns}`;
};

const Projects = () => {
  if (VISIBLE_PROJECTS.length === 0) return null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      data-chapter="invert"
      className={`${SECTION_FRAME} [--step:clamp(2rem,6vw,6rem)]`}
    >
      <ul
        className={`grid items-start gap-x-gutter gap-y-16 sm:grid-cols-2 sm:gap-y-20 ${THREE_COLUMNS ? "xl:grid-cols-3" : ""}`}
      >
        <li
          className={THREE_COLUMNS ? "sm:max-xl:col-span-2" : "sm:col-span-2"}
        >
          <h2 id="projects-heading" data-reveal className="text-head">
            Projects
          </h2>
        </li>
        {VISIBLE_PROJECTS.map(
          ({ title, kind, image, description, technologies, link }, index) => (
            <li
              key={title}
              data-reveal
              style={stagger(index + 1)}
              className={tileOffset(index)}
            >
              <div
                data-shutter
                style={stagger(index + 1)}
                className={`grid aspect-square place-items-center bg-surface p-[14%] max-sm:w-[70%] ${index % 2 === 0 ? "max-sm:ml-auto" : ""}`}
              >
                <img
                  src={image}
                  alt={`Screenshot of the ${title} ${kind.toLowerCase()}`}
                  width={480}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="w-full"
                />
              </div>
              <h3 className="mt-6 text-lead">{title}</h3>
              <p className="text-muted">{kind}</p>
              <p className="mt-4">{description}</p>
              <p translate="no" className="mt-4 text-small text-muted">
                {alphabetical(technologies).join(", ")}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center underline hover:decoration-[length:0.11em]"
                >
                  Visit site
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Projects;
