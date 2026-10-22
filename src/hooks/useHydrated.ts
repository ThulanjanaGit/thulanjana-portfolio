import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// False in server-rendered HTML and during hydration, true afterwards, so
// controls that need JavaScript can render a plain fallback until it runs.
export const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
