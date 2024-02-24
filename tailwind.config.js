/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['"Inter"', "sans-serif"] },
      colors: {
        black: "#191919",
        "violet-main": "#6D28D9",
        "violet-da-main": "rgb(109, 40, 217,0.7)",
        "violet-dr-main": "#EDE9FE",
        "gray-main": "#B4B4B8",
        "gray-dr-main": "#F1EFEF",
      },
    },
  },
  plugins: [],
};
