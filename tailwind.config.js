/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        clashdisplay: "ClashDisplay-Variable",
        tanker: "Tanker-Regular",
        nippo: 'Nippo-Variable',
      },
      colors: {
        'dark-background': '#242424',
        'dark-text': '#e6e6e6',
        'light-background': '#e6e6e6',
        'light-text': '#242424',
        'dark-frame': '#e6e6e6',
        'light-frame': '#242424',
      },
    },
  },
  plugins: [
    require('tailwind-fontawesome')({
      version: 6
    })
  ],
}

