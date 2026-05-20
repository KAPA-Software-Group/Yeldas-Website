/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ─── Brand Colors ────────────────────────────────────────────────────
      // Edit these to update the entire site's color scheme
      colors: {
        navy: {
          DEFAULT: "#0F172A", // Primary dark — headers, footer, hero bg
          mid: "#1B2846",     // Slightly lighter dark
          light: "#253354",   // Cards, hover states on dark bg
        },
        gold: {
          DEFAULT: "#B8933F", // Primary accent — borders, highlights
          light: "#C8A44F",   // Hover state for gold elements
          dark: "#9B7A30",    // Active / pressed states
          muted: "#D4BA82",   // Decorative / subdued gold
          subtle: "#F5EDD9",  // Very light gold tint for backgrounds
        },
        cream: {
          DEFAULT: "#FAF7F2", // Light section backgrounds
          dark: "#F2EBE0",    // Slightly deeper cream
          darker: "#E8DDD0",  // Borders on light sections
        },
        ink: {
          DEFAULT: "#0F172A", // Primary text on light backgrounds
          muted: "#4A5568",   // Secondary text
          light: "#718096",   // Tertiary / captions
        },
      },
      // ─── Typography ──────────────────────────────────────────────────────
      fontFamily: {
        serif: ['"EB Garamond"', '"Noto Serif JP"', '"Yu Mincho"', "Georgia", "Cambria", "serif"],
        sans: ["Lato", '"Noto Sans JP"', '"Hiragino Sans"', '"Yu Gothic"', "Meiryo", "system-ui", "sans-serif"],
      },
      // ─── Letter Spacing ──────────────────────────────────────────────────
      letterSpacing: {
        law: "0.18em",
      },
      // ─── Line Heights ────────────────────────────────────────────────────
      lineHeight: {
        tight: "1.15",
        display: "1.08",
      },
    },
  },
  plugins: [],
};
