import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaLinkedin } from "react-icons/fa6";
import { RECOMMENDATIONS } from "../constants/recommendations";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";

const arrowButtonClass =
  "grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-neutral-800 text-white shadow-lg transition-colors hover:bg-neutral-700";

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};

const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = RECOMMENDATIONS.length;
  const current = RECOMMENDATIONS[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + count) % count);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % count);
  };

  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-heading"
      aria-roledescription="carousel"
      className="border-b border-neutral-900 pb-4"
    >
      <SectionHeading id="recommendations-heading">
        Recommendations
      </SectionHeading>
      <m.div
        {...fadeIn("left")}
        className="mx-auto mb-12 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-start"
      >
        <div className="flex shrink-0 flex-col items-center">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous recommendation"
              className={arrowButtonClass}
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
            <AnimatePresence mode="wait" initial={false}>
              <m.img
                key={current.name}
                {...fade}
                src={current.image}
                alt=""
                width={288}
                height={288}
                loading="lazy"
                className="size-40 rounded-full object-cover sm:size-56"
              />
            </AnimatePresence>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next recommendation"
              className={arrowButtonClass}
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 flex">
            {RECOMMENDATIONS.map(({ name }, index) => (
              <button
                key={name}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show recommendation from ${name}`}
                aria-current={index === currentIndex}
                className="group grid size-6 cursor-pointer place-items-center"
              >
                <span
                  className={`size-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-neutral-200"
                      : "bg-neutral-700 group-hover:bg-neutral-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className="w-full lg:flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <m.figure
              key={current.name}
              {...fade}
              aria-roledescription="slide"
              aria-label={`${currentIndex + 1} of ${count}`}
            >
              <figcaption className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-neutral-200">
                    {current.name}
                  </p>
                  <p className="text-lg font-medium text-neutral-400">
                    {current.position}
                  </p>
                </div>
                <a
                  href={current.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${current.name} on LinkedIn (opens in a new tab)`}
                  className="text-3xl text-neutral-300 transition-colors hover:text-white"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
              </figcaption>
              <blockquote className="space-y-4 text-neutral-400">
                {current.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
            </m.figure>
          </AnimatePresence>
        </div>
      </m.div>
    </section>
  );
};

export default Recommendations;
