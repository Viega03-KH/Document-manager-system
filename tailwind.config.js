import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        zinc: colors.zinc,
        black: "#000",
        white: "#fff",
        transparent: "transparent",
        current: "currentColor",
      }
    },
  },
  plugins: [],
};
