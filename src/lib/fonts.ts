// ── Font Configuration ───────────────────────────────────────
// Self-hosted variable fonts via @fontsource-variable.
// Import the CSS in globals.css, use family names here for reference.

export const fontFamilies = {
  display: "'Fraunces Variable', Georgia, serif",
  accent: "'Oswald Variable', Impact, sans-serif",
  body: "'Inter Variable', system-ui, sans-serif",
} as const;

// CSS variable names applied to <html> via globals.css imports
export const fontVars = {
  display: "--font-display",
  accent: "--font-accent",
  body: "--font-body",
} as const;
