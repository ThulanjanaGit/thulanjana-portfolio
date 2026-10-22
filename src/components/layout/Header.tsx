import { NAV_LINKS } from "../../data/navigation";
import { CONTACT } from "../../data/profile";
import ActionLink from "../ui/ActionLink";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 px-page py-4 sm:py-6">
      <a
        href="#top"
        className="shrink-0 font-medium underline-offset-[0.18em] hover:underline"
      >
        Thulanjana Pramod
      </a>
      <div className="flex items-center gap-4 sm:gap-8">
        {/* On phones these links live in the footer. */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="underline-offset-[0.18em] hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
        <ActionLink href={`mailto:${CONTACT.email}`}>Email me</ActionLink>
      </div>
    </header>
  );
};

export default Header;
