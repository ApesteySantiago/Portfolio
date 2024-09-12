/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#e8dccc',
        'custom-color1': '#28242c',
      }
    },
  },
  plugins: [],
}