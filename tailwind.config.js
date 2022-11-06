/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "fk-green": "#75D9B3",
        "fk-green-darker": "#59a588",
        "fk-white": "#FFFFFF",
        "fk-darkGray": "#151A28",
        "fk-gray": "#090c14",
        "fk-black-blue": "#1D1125",
        "fk-bg-light": "#FAFAFA",
        "fk-white-lighter": "#A5A5A5",
      },
      backgroundImage: {
        mesh2: "url('/mesh-2.webp')",
      },
      fontFamily: {
        main: ["nunito sans", "sans-serif"],
        header: ["raleway", "sans-serif"],
      },
      keyframes: {
        "fk-bounce": {
          "0%": {
            transform: "translateY(-15%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(15%)",
          },
        },
        "hue-rotate": {
          "0%": {
            filter: "hue-rotate(0)",
          },
          "100%": {
            filter: "hue-rotate(360deg)",
          },
        },
      },
      animation: {
        "fk-bounce-animation":
          "fk-bounce .5s cubic-bezier(0.8, 0, 1, 1) infinite alternate",
        "hue-rotate": "hue-rotate 5s linear infinite",
      },
    },
  },
  plugins: [],
};
