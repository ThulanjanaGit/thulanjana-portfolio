import { NAV_LINKS } from "../../data/navigation";

// Prerendered pages keep the year they were built in, so the line that shows
// it ignores a different year when the page hydrates.
const CURRENT_YEAR = new Date().getFullYear();

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

const Footer = () => {
  return (
    <footer data-chapter="invert" className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 px-page pt-8 sm:pt-12">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={linkClass}>
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
