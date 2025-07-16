// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', 
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        skilljar: {
          blue: '#0052CC',
          darkblue: '#003D99',
          lightblue: '#E6F0FF',
          redlight: '#FEE2E2',
          reddark: '#B91C1C',
          greenlight: '#D1FAE5',
          greendark: '#065F46',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
