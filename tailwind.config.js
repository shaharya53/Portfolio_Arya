/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#d0ff71',
          hover: '#bdf354',
          accent: '#bbf455',
        },
        dark: {
          bg: '#141415',
          card: '#1a1a1c',
          card2: '#1f1f22',
          card3: '#252528',
          card4: '#181819',
        },
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
