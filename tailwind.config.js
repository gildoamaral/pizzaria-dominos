/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
          fontFamily: {
            'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
            'pathway-gothic': ['"Pathway Gothic One"', 'sans-serif'],
            'league-gothic': ['"League Gothic"', 'sans-serif'],
            'Namdhinggo': ['"Namdhinggo"', 'sans-serif'],
          },
          boxShadow: {
            'custom-bottom': '4px 5px 10px 2px rgba(0, 0, 0, 0.25)',
            'custom-header': '0 7px 10px 0 rgba(0, 0, 0, 0.25)',
          },
        },
      },
    plugins: [],
};
