import { HERO_LEAD, RESUME_URL } from "../../data/profile";

// Two fields meet at the seam: 46% of the height on phones, half from 640px.
// The name is lifted by 75% of its own height, so the seam runs through the
// middle of "Pramod". That word's real text is clipped to its upper half, and
// a copy drawn by CSS (so the name is in the page once) fills the lower half
// in the field's ink. --name fills the page width on phones (22.6cqw) and
// stops at 8.75rem.
const Hero = () => {
  return (
    <section
      aria-labelledby="hero-name"
      className="@container relative h-svh min-h-144 px-page [--name:min(8.75rem,22.6cqw)]"
    >
      <div
        data-chapter="field"
        className="absolute inset-x-0 top-[46%] bottom-0 px-page pt-[calc(var(--name)*0.45+2.5rem)] text-center sm:top-1/2"
      >
        <p className="mx-auto max-w-[46ch] text-lead">{HERO_LEAD}</p>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center underline"
        >
          View CV
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
      </div>
      <h1
        id="hero-name"
        className="absolute inset-x-0 top-[46%] -translate-y-3/4 px-page text-center text-(length:--name) leading-[0.9] font-medium tracking-tighter text-ink sm:top-1/2 light:text-accent"
      >
        <span className="block">Thulanjana</span>{" "}
        <span className="relative block">
          <span className="block [clip-path:inset(0_0_50%_0)]">Pramod</span>
          <span
            aria-hidden="true"
            data-text="Pramod"
            className="absolute inset-0 text-field-ink [clip-path:inset(50%_0_0_0)] after:content-[attr(data-text)]"
          />
        </span>
      </h1>
    </section>
  );
};

export default Hero;
