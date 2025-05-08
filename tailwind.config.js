export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        potta: ['"Potta One"', 'cursive'],
        open: ['"Open Sans"', 'sans-serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        dark: '#1F2937',
        bluePrimary: '#1D4ED8',
        navbarBlue: '#69bded',
      },
    },
  },
  plugins: [],
};
