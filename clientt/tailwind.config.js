/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gray: "#374151",
        blue600: "#0284c7",
        navbg: "#1e40af",
        darkBlue: "#0F172A",
        // primary: "#0d0d2b",
        primary: "#00040f",

        lightprimary: "#35068C",
        lightgray: "#e0e0e0",
        greyishwhite: "#1F2937",
        lightergray: "#9CA3AF",
        divbg: "#374151",
        greyishsecondary: "#1F2937",
        secondary: "#2B076E",
        lightBlue: "#491F98",
        lighterBlue: "#491f98",

        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
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
  plugins: [require("@tailwindcss/line-clamp")],
};
