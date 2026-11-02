import type { MouseEvent } from "react";
import { RECOMMENDATIONS } from "../../data/recommendations";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";

const featured = RECOMMENDATIONS.find(({ excerpt }) => excerpt);

const toggleClass =
  "min-h-11 cursor-pointer items-center underline hover:decoration-[0.11em]";

// Closes a letter from its foot and gives focus back to its summary, which is
// hidden while the letter is open.
const showLess = (event: MouseEvent<HTMLButtonElement>) => {
  const details = event.currentTarget.closest("details");
  if (!details) return;
  details.open = false;
  details.querySelector("summary")?.focus();
};

// The quote stays on two lines at every width: its longer line measures 909px
// at 100px, so 10.8cqw fits a phone and the heading size takes over above.
const Recommendations = () => {
  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-heading"
      className={`@container ${SECTION_FRAME}`}
    >
      <SectionHeading id="recommendations-heading">
        Recommendations
      </SectionHeading>
      {featured?.excerpt && (
        <figure>
          <blockquote className="text-[min(var(--text-head),10.8cqw)] leading-[0.95] font-medium tracking-[-0.04em]">
            <p>
              {featured.excerpt.map((line, index, lines) => (
                <span
                  key={line}
                  data-reveal
                  style={stagger(index + 1)}
                  className="block"
                >
                  {index === 0 && "“"}
                  {line}
                  {index === lines.length - 1 && "”"}
                </span>
              ))}
            </p>
          </blockquote>
          <figcaption
            data-reveal
            style={stagger(3)}
            className="mt-6 text-muted"
          >
            <span translate="no">{featured.name}</span>, {featured.role}
            {featured.organisation && (
              <>
                {" at "}
                <span translate="no">{featured.organisation}</span>
              </>
            )}
          </figcaption>
        </figure>
      )}
      <ul className="mt-20 grid gap-x-gutter gap-y-16 md:grid-cols-2">
        {RECOMMENDATIONS.map(
          ({
            name,
            role,
            organisation,
            relationship,
            paragraphs,
            image,
            linkedIn,
          }) => {
            const [first, ...rest] = paragraphs;
            return (
              <li key={name}>
                <div className="flex items-center gap-5 lg:block">
                  <img
                    src={image}
                    alt=""
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="size-20 shrink-0 bg-surface object-cover lg:size-28"
                  />
                  <div className="lg:mt-6">
                    <h3 translate="no" className="text-lead">
                      {name}
                    </h3>
                    <p className="text-muted">
                      {role}
                      {organisation && (
                        <>
                          {", "}
                          <span translate="no">{organisation}</span>
                        </>
                      )}
                    </p>
                    <p className="text-small text-muted">{relationship}</p>
                  </div>
                </div>
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center underline hover:decoration-[0.11em]"
                >
                  LinkedIn
                  <span className="sr-only">: {name} (opens in a new tab)</span>
                </a>
                <blockquote className="mt-4">
                  <p>{first}</p>
                  {/* Open, the letter ends with "Show less". Without scripts
                      that button can't work, so the summary stays and says
                      it instead. */}
                  {rest.length > 0 && (
                    <details className="group">
                      <summary
                        className={`inline-flex list-none ${toggleClass} group-open:in-[.js]:hidden [&::-webkit-details-marker]:hidden`}
                      >
                        <span className="group-open:hidden">
                          Read the full recommendation
                        </span>
                        <span className="hidden group-open:inline">
                          Show less
                        </span>
                      </summary>
                      <div className="space-y-[0.9em] in-[.js]:pt-[0.9em]">
                        {rest.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={showLess}
                        className={`hidden ${toggleClass} in-[.js]:inline-flex`}
                      >
                        Show less
                      </button>
                    </details>
                  )}
                </blockquote>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Recommendations;
