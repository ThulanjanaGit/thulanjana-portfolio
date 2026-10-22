import { HERO_LEAD, RESUME_URL } from "../../data/profile";

const NAME_LINES = ["Thulanjana", "Pramod"];

const nameLines = NAME_LINES.map((line) => (
  <span key={line} className="block">
    {line}
  </span>
));

// Two fields meet at the seam: 46% of the height on phones, half from 640px.
// The name is lifted by 75% of its own height, so the seam runs through its
// second line, and each copy is clipped to one field so the ink changes there.
// --name fills the page width on phones (22.6cqw) and stops at 8.75rem.
const nameClass =
  "text-(length:--name) leading-[0.9] font-medium tracking-tighter";

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
        <p className="mx-auto max-w-[46ch] sm:text-lead">{HERO_LEAD}</p>
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
      <div className="absolute inset-x-0 top-[46%] -translate-y-3/4 px-page text-center sm:top-1/2">
        <h1
          id="hero-name"
          className={`${nameClass} text-ink [clip-path:inset(0_0_25%_0)] light:text-accent`}
        >
          {nameLines}
        </h1>
        <p
          aria-hidden="true"
          className={`${nameClass} absolute inset-0 px-page text-field-ink [clip-path:inset(75%_0_0_0)]`}
        >
          {nameLines}
        </p>
      </div>
    </section>
  );
};

export default Hero;
