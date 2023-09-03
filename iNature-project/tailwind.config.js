/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

"./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0d1330",
        secondaryColor: "#aaa6c3",
        tertiaryColor: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
    },
  },
  plugins: [],
}

