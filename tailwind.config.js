const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: {
          DEFAULT: "hsl(172, 67%, 45%)",
          "light-gray-1": "hsl(185, 41%, 84%)",
          "light-gray-2": "hsl(189, 41%, 97%)",
          "dark-gray-1": "hsl(184, 14%, 56%)",
          "dark-gray-2": "hsl(186, 14%, 43%)",
          darkest: "hsl(183, 100%, 15%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
