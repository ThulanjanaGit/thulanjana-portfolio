import type { CSSProperties } from "react";
import { HERO_LEAD, RESUME_URL } from "../../data/profile";
import { stagger } from "../../utils/stagger";

// Each line of the name rises out of a mask; the padding lets ascenders and
// descenders paint, and the negative margin keeps the layout unchanged. The
// heading is a grid so those negative margins do not collapse into each other.
const mask = "block overflow-clip py-[0.2em] -my-[0.2em]";

// Two fields meet at the seam: 46% of the height on phones, half from 640px.
// The name is lifted by 75% of its own height, so the seam runs through the
// middle of "Pramod". That word's real text is clipped to its upper half, and
// a copy drawn by CSS (so the name is in the page once) fills the lower half
// in the inverted ink. The clips stay still while the word rises through them.
// --name fills the page width on phones (22.6cqw) and stops at 8.75rem.
const Hero = () => {
  return (
    <section
      aria-labelledby="hero-name"
      className="@container relative h-svh min-h-144 px-page [--name:min(8.75rem,22.6cqw)]"
    >
      <div
        data-chapter="invert"
        className="absolute inset-x-0 top-[46%] bottom-0 px-page pt-[calc(var(--name)*0.45+2.5rem)] text-center sm:top-1/2"
      >
        <p data-load className="mx-auto max-w-[46ch] text-lead">
          {HERO_LEAD}
        </p>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-load
          style={{ "--d": "480ms" } as CSSProperties}
          className="mt-4 inline-flex min-h-11 items-center underline"
        >
          View CV
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
      </div>
      <h1
        id="hero-name"
        className="absolute inset-x-0 top-[46%] grid -translate-y-3/4 px-page text-center text-(length:--name) leading-[0.9] font-medium tracking-tighter text-ink sm:top-1/2"
      >
        <span className={mask}>
          <span data-line className="block">
            Thulanjana
          </span>
        </span>{" "}
        <span className={mask}>
          <span className="relative block">
            <span className="block [clip-path:inset(-50%_-10%_50%_-10%)]">
              <span data-line style={stagger(1)} className="block">
                Pramod
              </span>
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 text-ground [clip-path:inset(50%_-10%_-50%_-10%)]"
            >
              <span
                data-line
                data-text="Pramod"
                style={stagger(1)}
                className="block after:content-[attr(data-text)]"
              />
            </span>
          </span>
        </span>
      </h1>
    </section>
  );
};

export default Hero;
