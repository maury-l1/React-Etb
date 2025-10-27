/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nothing: ['"Nothing You Could Do"', 'cursive'], // <- IMPORTANTE las comillas y mayúsculas
      },
    },
  },
  plugins: [],
}
