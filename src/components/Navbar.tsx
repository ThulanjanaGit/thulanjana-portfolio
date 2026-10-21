import * as m from "motion/react-m";
import logo from "../assets/logo.webp";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants";

const Navbar = () => {
  return (
    <header className="mb-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
      <a
        href="#top"
        aria-label="Thulanjana Pramod, home"
        className="mx-2 shrink-0"
      >
        <img
          className="w-16 rounded-lg"
          src={logo}
          alt=""
          width={64}
          height={64}
        />
      </a>
      <nav
        aria-label="Main"
        className="order-last w-full lg:order-none lg:w-auto"
      >
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-neutral-400 sm:gap-x-6 lg:text-base">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul
        aria-label="Social links"
        className="mx-2 flex items-center gap-4 text-2xl"
      >
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <m.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <Icon aria-hidden="true" />
            </m.a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
