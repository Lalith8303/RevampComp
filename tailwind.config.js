/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'Blue-Color': '#2a68ff',
        'Dark-Color': '#194232',
        'Gray-Color': '#6f6f6f',
      }
    },
  },
  plugins: [],
}

