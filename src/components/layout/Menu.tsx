import { useEffect, useRef } from "react";
import { NAV_LINKS, sectionHref } from "../../data/navigation";
import { CONTACT, RESUME_URL } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

// A 44px tap target around a 20px icon, shared by the open and close buttons
// so one icon replaces the other in place.
const iconButtonClass =
  "-mx-3 grid size-11 shrink-0 cursor-pointer place-items-center";

// Drawn with the theme switch's 1.5px stroke.
const MenuIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      d="M3 5.5h14M3 10h14M3 14.5h14"
    />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      d="m4.5 4.5 11 11m0-11-11 11"
    />
  </svg>
);

interface MenuProps {
  // Whether this is the home page, whose sections the links point to.
  home: boolean;
}

// The site menu below 1024px: a button that opens a modal dialog dropping
// from the top, with the section links, Email and the CV. Its top bar repeats
// the header's. Escape, the close button, a tap outside or a link closes it.
// Without scripts the button is hidden and the footer has the links.
const Menu = ({ home }: MenuProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const close = () => dialog.current?.close();

  // Closing returns focus to the menu button, which would keep the header in
  // view over the section a link jumps to, so a link lets go of it.
  const leave = () => {
    close();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // The content fills the dialog, so a click on the dialog element itself is
  // a click on the backdrop, outside the menu.
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const onClick = (event: Event) => {
      if (event.target === element) element.close();
    };
    element.addEventListener("click", onClick);
    return () => element.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Menu"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className={`${iconButtonClass} lg:hidden [html:not(.js)_&]:hidden`}
      >
        <MenuIcon />
      </button>
      <dialog
        ref={dialog}
        aria-label="Menu"
        data-menu
        className="bottom-auto m-0 max-h-dvh w-full max-w-none overflow-y-auto border-b-[1.5px] border-muted bg-ground p-0 text-ink backdrop:bg-transparent"
      >
        <div className="px-page pt-3 pb-8 sm:pt-5">
          <div className="flex items-center justify-between gap-4">
            <a
              href={sectionHref("#top", home)}
              translate="no"
              onClick={leave}
              className={`${linkClass} font-medium`}
            >
              Thulanjana Pramod
            </a>
            <div className="flex items-center gap-5 sm:gap-8">
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className={iconButtonClass}
              >
                <CloseIcon />
              </button>
              <ThemeToggle />
            </div>
          </div>
          <nav aria-label="Sections" className="mt-6">
            <ul>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={sectionHref(href, home)}
                    onClick={leave}
                    className="inline-block py-1 text-head underline-offset-[0.18em] hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-6">
              <li>
                <a href={`mailto:${CONTACT.email}`} className={linkClass}>
                  Email
                </a>
              </li>
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  View CV
                  <span className="sr-only"> (PDF, opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  );
};

export default Menu;
