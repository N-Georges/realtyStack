/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      gray: '#6F717E',
      grayLight: '#F6F6FA',
      black: '#10121F',
      purple: '#7152F3',
      purpleLight: '#EFEAFB',
      white: '#FFFFFF',
      whiteSecondary: '#F5F5F5',
      green: '#21A746',
      red: '#FC5A5A',
    },
  },
  plugins: [],
};
