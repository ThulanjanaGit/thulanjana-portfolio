import { toggleTheme } from "../../utils/theme";

// The label names the theme the button switches to. CSS picks it from
// data-theme on <html>, so the markup is the same whatever theme is saved.
const ThemeToggle = () => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="min-h-11 cursor-pointer underline-offset-[0.18em] hover:underline"
    >
      <span className="light:hidden">Light</span>
      <span className="hidden light:inline">Dark</span>
      <span className="sr-only"> theme</span>
    </button>
  );
};

export default ThemeToggle;
