import { NAV_LINKS, sectionHref } from "../../data/navigation";

// Prerendered pages keep the year they were built in, so the line that shows
// it ignores a different year when the page hydrates.
const CURRENT_YEAR = new Date().getFullYear();

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

interface FooterProps {
  // Whether this is the home page, whose sections the links point to.
  home: boolean;
}

const Footer = ({ home }: FooterProps) => {
  return (
    <footer data-chapter="invert" className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-page pt-8 sm:justify-between sm:pt-12">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 sm:justify-start">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={sectionHref(href, home)} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className={linkClass}>
                Back to top
              </a>
            </li>
          </ul>
        </nav>
        <p translate="no" suppressHydrationWarning>
          © {CURRENT_YEAR} Thulanjana Pramod
        </p>
      </div>
      {/* The first name, cut by the bottom edge. 22.6cqw makes it span the
          page width: it measures 442.5px at 100px in Hanken Grotesk 500. */}
      <div className="@container mt-8 px-page sm:mt-12">
        <p
          aria-hidden="true"
          translate="no"
          data-settle
          className="translate-y-[28%] text-[22.6cqw] leading-[0.8] font-medium tracking-tighter whitespace-nowrap select-none"
        >
          Thulanjana
        </p>
      </div>
    </footer>
  );
};

export default Footer;
