import portraitDark from "../../assets/portrait-dark.webp";
import portraitLight from "../../assets/portrait-light.webp";
import { ABOUT_LEAD, ABOUT_PARAGRAPHS } from "../../data/profile";
import { useHydrated } from "../../hooks/useHydrated";
import { useLightTheme } from "../../hooks/useLightTheme";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  const light = useLightTheme();
  const hydrated = useHydrated();
  // The portrait on a dark backdrop in the dark theme and in an office in the
  // light one. Until hydration the device's setting picks the photo, which is
  // the theme unless the visitor chose another; then the theme does. A hidden
  // <img> would be fetched anyway, so one <picture> switches instead.
  const lightMedia = hydrated
    ? light
      ? "all"
      : "not all"
    : "(prefers-color-scheme: light)";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={SECTION_FRAME}
    >
      <SectionHeading id="about-heading">About</SectionHeading>
      <div className="grid gap-x-gutter lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p data-reveal style={stagger(1)} className="max-w-[34ch] text-lead">
            {ABOUT_LEAD}
          </p>
          <div
            data-reveal
            style={stagger(2)}
            className="mt-8 max-w-[62ch] space-y-[0.9em]"
          >
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div
          data-reveal
          style={stagger(3)}
          className="mt-12 w-3/5 justify-self-center sm:w-1/2 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:w-full lg:self-center"
        >
          <picture>
            <source srcSet={portraitLight} media={lightMedia} />
            <img
              src={portraitDark}
              alt="Portrait of Thulanjana Pramod"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              data-drift
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default About;
