/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A39A4',
          red: '#E11D48',
          white: '#FFFFFF',
          dark: '#0B1324',
        },
      },
    },
  },
  plugins: [],
};


