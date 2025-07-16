/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'skilljar-dark': '#003d99',
        'skilljar-light': '#f4f8fc'
      }
    }
  },
  plugins: [],
}
