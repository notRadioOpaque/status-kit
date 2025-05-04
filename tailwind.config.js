/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class", // enables class-based theme switching
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Optional: custom colors, fonts, etc.
      // colors: {
      //   'primary-bg': '#0f172a',       // dark background
      //   'primary-color': '#f8fafc',    // light text
      // },
    },
  },
  plugins: [],
};
