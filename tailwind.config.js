/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      secondary: "#6F717E",
      secondaryLight: "#F6F6FA",
      black: "#10121F",
      primary: "#7152F3",
      white: "#FFFFFF",
      whiteSecondary: "#F5F5F5",
      green: "#21A746",
      red: "#FC5A5A",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
