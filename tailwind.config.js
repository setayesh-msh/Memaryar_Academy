/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,css}",
    "./style/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#e4ecfc",
        brandYellow: "#fdefb0",
        brandBeige: "#e4d9c7",
        brandGreen: "#bccfaf",
        brandPink: "#f49eaa",
      }
    },
  },
  plugins: [],
}
