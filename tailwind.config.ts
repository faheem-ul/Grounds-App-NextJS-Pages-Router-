/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: { max: "768px" },
      tab: { max: "991px" },
    },
    extend: {
      colors: {
        primary: "rgb(242 238 230)",
        secondary: "rgb(163 136 113)",
        accentGreen: "rgb(143 182 159)",
        darkBrown: "rgb(48 42 37)",
        blackOpacity: "rgb(169 164 161)",
        accent: "#000000",
      },
      fontFamily: {
        heading: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
