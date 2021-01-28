const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        torre: {
          300: "#FBFAE7",
          400: "#F2FEDC",
          500: "#cddc39",
          600: "#484838",
          700: "#2B3A00",
        },
        dark: {
          500: "#1d1c24",
          600: "#14131a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
