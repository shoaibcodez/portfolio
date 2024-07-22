/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "white",
        secondaryLight: "#f7f7f7",
        lightHover: "#d2cdcd",
        primaryDark: "#121212",
        secondaryDark: "#353535",
        darkHover: "#18191E",
        textPara: "#57556C",
        heading: "#3182CE",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
