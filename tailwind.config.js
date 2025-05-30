/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'century': ['"Century Gothic"', 'sans-serif'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 