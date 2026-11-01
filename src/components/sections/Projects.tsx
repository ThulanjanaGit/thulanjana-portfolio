import { projectPath, VISIBLE_PROJECTS } from "../../data/projects";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";

// The width each tile's screenshot is shown at, so the browser picks the
// right file.
const TILE_SIZES = "(min-width: 1280px) 380px, (min-width: 640px) 44vw, 90vw";

// Tiles step down like a staircase. With two columns the heading runs across
// the top and the second column starts one step lower. From 1280px, three or
// more projects take three columns with the heading in the first cell, the
// next two starting one and two steps lower; two projects keep two columns so
// no column stands empty. On phones the tiles stack. Class names stay whole
// so Tailwind can find them.
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
      data-chapter="surface"
      className={`${SECTION_FRAME} [--step:clamp(1rem,2.5vw,2.5rem)]`}
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
        {/* The title's link covers the whole tile, picture included. */}
        {VISIBLE_PROJECTS.map(
          ({ slug, title, kind, summary, technologies, cover }, index) => (
            <li
              key={slug}
              data-reveal
              style={stagger(index + 1)}
              className={`group relative ${tileOffset(index)}`}
            >
              <div
                data-shutter
                style={stagger(index + 1)}
                className="bg-ground p-gutter"
              >
                <img
                  src={cover.src}
                  srcSet={cover.srcSet}
                  sizes={TILE_SIZES}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full"
                />
              </div>
              <h3 className="mt-6 text-lead">
                <a
                  href={projectPath(slug)}
                  className="underline-offset-[0.18em] group-hover:underline after:absolute after:inset-0"
                >
                  {title}
                </a>
              </h3>
              <p className="text-muted">{kind}</p>
              <p className="mt-4">{summary}</p>
              <p translate="no" className="mt-4 text-small text-muted">
                {technologies.join(", ")}
              </p>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Projects;
