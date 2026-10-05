export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

const SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Sets `data-theme` on <html> before first paint: the visitor's saved choice
 * if they have made one, otherwise whatever their system asks for.
 *
 * This runs as a blocking inline script in the document head. Light lives on
 * bare `:root` in globals.css and dark on `[data-theme="dark"]`, so without
 * this a dark-mode visitor would see a light flash on every load.
 */
export const THEME_INIT_SCRIPT = `(function(){var t;try{t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia(${JSON.stringify(
  SYSTEM_DARK_QUERY,
)}).matches?"dark":"light"}document.documentElement.dataset.theme=t})()`;

/** Everything below is client only. */

export function systemThemeQuery() {
  return window.matchMedia(SYSTEM_DARK_QUERY);
}

export function getSystemTheme(): Theme {
  return systemThemeQuery().matches ? "dark" : "light";
}

/** The visitor's saved choice, or null while they are following the system. */
export function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    // Private browsing or blocked storage: treated as no saved choice.
    return null;
  }
}

/** The theme currently applied to the document. */
export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (root.dataset.theme === theme) return;
  // Hover and state transitions would otherwise animate the swap too, each on
  // its own timing, so for a moment some elements would sit in the old theme
  // and some in the new. Transitions are suspended while the new colors are
  // computed, so everything changes in one frame.
  root.classList.add("theme-switching");
  root.dataset.theme = theme;
  // Reading a computed value forces the recalculation to happen now, while
  // transitions are still off.
  void window.getComputedStyle(root).color;
  requestAnimationFrame(() => root.classList.remove("theme-switching"));
}

export function toggleTheme() {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    // Picking what the system already asks for is not an override, so the
    // saved choice is cleared and the site goes back to following the system.
    if (next === getSystemTheme()) {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
  } catch {
    // The choice still applies to this page, it just will not survive a
    // reload.
  }
}
