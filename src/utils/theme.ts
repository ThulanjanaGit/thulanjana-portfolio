type Theme = "dark" | "light";

const THEME_COLOR: Record<Theme, string> = {
  dark: "#0b0b0b",
  light: "#f1eee8",
};

// The inline script in index.html applies the saved theme before the first
// paint; this keeps the attribute, the saved choice and the browser UI in step.
export const toggleTheme = () => {
  const root = document.documentElement;
  const next: Theme = root.dataset.theme === "light" ? "dark" : "light";

  if (next === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;

  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage can be blocked; the choice then lasts until the page reloads.
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLOR[next]);
  document
    .querySelector('meta[name="color-scheme"]')
    ?.setAttribute("content", next);
};
