/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purp: '#883e9c',
        pink: '#ff2ad4'
      }
    },
  },
  plugins: [],
}
