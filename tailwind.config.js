/** @type {import('tailwindcss').Config} */
// This line provides type-checking and IntelliSense in supported editors like VSCode.
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./index.html", // Tell Tailwind to scan `index.html` for class names
    "./src/**/*.{js,ts,jsx,tsx}", // Also scan all files inside `src/` with .js, .ts, .jsx, or .tsx extensions
  ],
  safelist: ["mt-6"],
  theme: {
    extend: {
      colors: {
        primary: "#D1495B",
        dark: "#003D5B",
      },
    },
  },

  plugins: [],
};
