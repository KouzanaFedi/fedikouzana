/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fk-orange": "#FFCC95",
        "fk-pink": "#FF529B",
        "fk-purple": "#B473FF",
        "fk-white": "#FFFFFF",
        "fk-darkGray": "#101524",
        "fk-gray": "#090c14",
        "fk-white-lighter": "#E1E1E1",
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
        "fk-gradiant": {
          "0%": { "background-position": "10% 0%" },
          "50%": { "background-position": "91% 100%" },
          "100%": { "background-position": "10% 0%" },
        },
        "hue-rotate": {
          "0%": {
            filter: "hue-rotate(0)",
          },
          "100%": {
            filter: "hue-rotate(360deg)",
          },
        },
        "hue-rotate-from-middle": {
          "0%": {
            filter: "hue-rotate(180dev)",
          },
          "50%": {
            filter: "hue-rotate(360deg)",
          },
          "100%": {
            filter: "hue-rotate(180dev)",
          },
        },
      },
      animation: {
        "fk-bounce-animation":
          "fk-bounce .5s cubic-bezier(0.8, 0, 1, 1) infinite alternate",
        "fk-gradiant-animation": "fk-gradiant 5s ease infinite",
        "hue-rotate": "hue-rotate 5s linear infinite",
        "hue-rotate-middle": "hue-rotate-from-middle 5s linear infinite",
      },
    },
  },
  plugins: [],
};
