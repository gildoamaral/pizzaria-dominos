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
            'custom-bottom': '3px 3px 7px 0 rgba(0, 0, 0, 0.5)',
            'custom-header': '0 7px 10px 0 rgba(0, 0, 0, 0.25)',
            'custom-right': '2px 1px 10px 3px rgba(0, 0, 0, 0.5)'
          },
        },
      },
    plugins: [],
};
