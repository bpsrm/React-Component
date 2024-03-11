/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['"Mukta"', "sans-serif"] },
      colors: {
        black: "#191919",
        "gray-main": "#6b7280",
        "gray-dr-main": "#F1EFEF",
        blue: "#0C359E",
        "blue-dr": "#C5DFF8",
        "blue-da": "#0E2954",
      },
    },
  },
  plugins: [],
};
