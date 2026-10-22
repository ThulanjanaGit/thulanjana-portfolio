import { useRef } from "react";
import { NAV_LINKS } from "../../data/navigation";
import { CONTACT } from "../../data/profile";
import { useHeadroom } from "../../hooks/useHeadroom";
import ThemeToggle from "../ui/ThemeToggle";

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

const Header = () => {
  const header = useRef<HTMLElement>(null);
  const { atTop, hidden } = useHeadroom(header);

  return (
    // At the top it sits over the hero's upper field. Further down it takes
    // the ground colour and slides away while you read; see useHeadroom for
    // what brings it back. Without scripts it scrolls away with the hero.
    <header
      ref={header}
      data-scrolled={atTop ? undefined : ""}
      data-hidden={hidden ? "" : undefined}
      className="absolute inset-x-0 top-0 z-40 flex items-center justify-between gap-4 px-page py-3 data-hidden:not-focus-within:-translate-y-full data-scrolled:bg-ground motion-safe:[transition:translate_var(--t-ui)_var(--ease-out),background-color_var(--t-ui)_ease] sm:py-5 [.js_&]:fixed"
    >
      <a href="#top" className={`${linkClass} shrink-0 font-medium`}>
        Thulanjana Pramod
      </a>
      <div className="flex items-center gap-5 sm:gap-8">
        <nav aria-label="Main">
          <ul className="flex gap-5 sm:gap-8">
            {/* Section links show from 1024px; on smaller screens they are
                in the footer. */}
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="hidden lg:block">
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT.email}`} className={linkClass}>
                Email
              </a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
