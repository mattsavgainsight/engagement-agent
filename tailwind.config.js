/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}// tailwind.config.js
theme: {
  extend: {
    colors: {
      'skilljar-dark': '#0f1d3b',
    },
  },
},
