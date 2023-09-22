/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarybg: '#140D27',
        primaryPurple: '#D434FE',
        primaryBlue:'#903AFF',
      }
    },
  },
  plugins: [],
}