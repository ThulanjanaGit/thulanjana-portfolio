import { useSyncExternalStore } from "react";
import { isLightTheme, THEME_CHANGE } from "../utils/theme";

const subscribe = (onChange: () => void) => {
  window.addEventListener(THEME_CHANGE, onChange);
  return () => window.removeEventListener(THEME_CHANGE, onChange);
};

// Whether the light theme is on. Server-rendered HTML always says dark (the
// default); the real value takes over after hydration.
export const useLightTheme = () =>
  useSyncExternalStore(subscribe, isLightTheme, () => false);
