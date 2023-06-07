/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gdrive: {
          black: {
            300: '#F3F3F3',
          },
          blue: {
            500: '#4285F4',
          },
          green: {
            500: '#00AC47',
          },
          red: {
            500: '#EA4435',
          },
          yellow: {
            500: '#FFBA00',
          },
        }
      }
    },
  },
  plugins: [],
};

