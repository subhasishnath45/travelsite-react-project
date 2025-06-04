/** @type {import('tailwindcss').Config} */
// This line provides type-checking and IntelliSense in supported editors like VSCode.

module.exports = {
  content: [
    "./index.html", // Tell Tailwind to scan `index.html` for class names
    "./src/**/*.{js,ts,jsx,tsx}", // Also scan all files inside `src/` with .js, .ts, .jsx, or .tsx extensions
  ],
  safelist: ['mt-6'],
  theme: {
    extend: {
      colors: {
        primary: "#0094FF",
        dark: "#111827",
      },
    }, // Placeholder to extend the default Tailwind theme (e.g., add custom colors, fonts, spacing, etc.)
  },

  plugins: [], // List of Tailwind plugins to use (e.g., forms, typography, aspect-ratio). Empty means no extra plugins.
};
