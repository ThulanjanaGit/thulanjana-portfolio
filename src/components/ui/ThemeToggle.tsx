import { useLightTheme } from "../../hooks/useLightTheme";
import { toggleTheme } from "../../utils/theme";

const Moon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5">
    <path
      fill="currentColor"
      d="M10.8 1.4a6.6 6.6 0 1 0 3.8 10.8A6.2 6.2 0 0 1 10.8 1.4Z"
    />
  </svg>
);

const Sun = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5">
    <circle cx="8" cy="8" r="3.2" fill="currentColor" />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      d="M8 .8v2M8 13.2v2M.8 8h2M13.2 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M2.9 13.1l1.4-1.4M11.7 4.3l1.4-1.4"
    />
  </svg>
);

// A switch for the light theme. Its position and icons follow data-theme on
// <html> through CSS, so it is right on the first paint; aria-checked follows
// once scripts run. Without scripts it is hidden, since it could not work.
// The ::after layer stretches the hit area to 44px tall.
const ThemeToggle = () => {
  const light = useLightTheme();

  return (
    <button
      type="button"
      role="switch"
      data-ui
      aria-checked={light}
      aria-label="Light theme"
      onClick={toggleTheme}
      className="relative grid h-7 w-13 shrink-0 cursor-pointer grid-cols-2 place-items-center border-[1.5px] border-muted text-muted after:absolute after:-inset-2 after:content-[''] [html:not(.js)_&]:hidden"
    >
      <Moon />
      <Sun />
      <span
        aria-hidden="true"
        className="absolute top-px left-px grid size-5.75 place-items-center bg-ink text-ground motion-safe:[transition:translate_var(--t-ui)_var(--ease-out)] light:translate-x-6"
      >
        <span className="light:hidden">
          <Moon />
        </span>
        <span className="hidden light:block">
          <Sun />
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
