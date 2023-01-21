/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2E0249",
        secondary: "#F806CC",
        accent: "#FFFFFF",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        containerWidth: "320px",
        containerHeight: "565px",
        buttonWidth: "64px",
        buttonHeight: "32px",
        buttonCircleSize: "24px",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
