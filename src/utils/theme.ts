type Theme = "dark" | "light";

const THEME_COLOR: Record<Theme, string> = {
  dark: "#0b0b0b",
  light: "#eeedea",
};

export const THEME_CHANGE = "themechange";

// Whether the visitor has picked a theme with the switch, on this visit or an
// earlier one. Until then the page follows the device's setting.
let chosen = false;

export const isLightTheme = () =>
  document.documentElement.dataset.theme === "light";

// The inline script in index.html applies the first theme before the first
// paint; this keeps the attribute and the browser UI in step after that.
const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLOR[theme]);
  document
    .querySelector('meta[name="color-scheme"]')
    ?.setAttribute("content", theme);
  window.dispatchEvent(new Event(THEME_CHANGE));
};

export const toggleTheme = () => {
  const next: Theme = isLightTheme() ? "dark" : "light";
  chosen = true;
  applyTheme(next);

  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage can be blocked; the choice then lasts until the page reloads.
  }
};

// Keeps the page in step with the device's setting while it is open (an
// automatic dark mode at sunset, say), until the visitor picks a theme.
export const followDeviceTheme = () => {
  try {
    chosen ||= localStorage.getItem("theme") !== null;
  } catch {
    // Storage can be blocked; then only a choice made on this visit counts.
  }
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", ({ matches }) => {
      if (!chosen) applyTheme(matches ? "light" : "dark");
    });
};
