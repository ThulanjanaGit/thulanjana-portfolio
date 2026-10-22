import { NAV_LINKS } from "../../data/navigation";
import { CONTACT } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

const Header = () => {
  return (
    // Sits over the hero's upper field and scrolls away with it.
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-page py-3 sm:py-5">
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
