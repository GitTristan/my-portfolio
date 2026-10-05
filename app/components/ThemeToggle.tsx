"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  getTheme,
  systemThemeQuery,
  toggleTheme,
} from "../lib/theme";

// Notifies React whenever `data-theme` on <html> changes, whoever changed it.
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

/**
 * Light / Dark switch.
 *
 * The thumb position and label colors are driven by CSS through the `dark:`
 * variant, keyed off `data-theme` on <html>, not by React state. That keeps
 * the server and client markup identical, so there is no hydration mismatch
 * and no flash of the switch in the wrong position. React only tracks the
 * theme to keep `aria-checked` accurate for assistive technology.
 */
export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    () => getTheme() === "dark",
    () => false,
  );

  // The inline script in the document head has already set the theme by the
  // time this runs, so in production this does nothing. In development,
  // Strict Mode's remount strips the attribute from <html> and this puts it
  // back before the browser paints.
  useLayoutEffect(() => {
    applyTheme(getStoredTheme() ?? getSystemTheme());
  }, []);

  // Follow the system if it changes while the page is open, unless the
  // visitor has chosen a theme themselves.
  useEffect(() => {
    const query = systemThemeQuery();
    const onSystemChange = () => {
      if (!getStoredTheme()) applyTheme(getSystemTheme());
    };
    query.addEventListener("change", onSystemChange);
    return () => query.removeEventListener("change", onSystemChange);
  }, []);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      onClick={toggleTheme}
      className="theme-toggle bg-hairline relative grid h-8 flex-none cursor-pointer grid-cols-2 items-center rounded-full p-0.5 text-center font-mono text-xs font-semibold"
    >
      <span
        aria-hidden="true"
        className="bg-primary absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full transition-transform duration-200 ease-out dark:translate-x-full"
      />
      <span className="text-on-primary dark:text-muted relative px-2.5 transition-colors duration-200">
        Light
      </span>
      <span className="text-muted dark:text-on-primary relative px-2.5 transition-colors duration-200">
        Dark
      </span>
    </button>
  );
}
