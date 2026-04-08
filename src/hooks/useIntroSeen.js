/**
 * useIntroSeen
 *
 * Thin abstraction over browser storage so the intro-seen flag can be
 * switched between sessionStorage (clears on tab close) and localStorage
 * (persists across sessions) by changing one line.
 *
 * sessionStorage → user sees the intro once per browser session
 * localStorage   → user sees it once ever (until they clear site data)
 */

const STORAGE_KEY = "anwari_intro_seen";
const store       = sessionStorage; // ← swap to localStorage to persist across sessions

export function hasSeenIntro() {
  try {
    return store.getItem(STORAGE_KEY) === "1";
  } catch {
    // Storage blocked (private browsing edge-cases) — treat as seen so we never block the site
    return true;
  }
}

export function markIntroSeen() {
  try {
    store.setItem(STORAGE_KEY, "1");
  } catch {
    // Ignore write failures
  }
}
