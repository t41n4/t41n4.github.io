/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashdisplay: "ClashDisplay-Variable",
        tanker: "Tanker-Regular",
        nippo: 'Nippo-Variable',
      }
    },
  },
  plugins: [],
}

