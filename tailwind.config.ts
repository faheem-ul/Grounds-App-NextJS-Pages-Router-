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
    extend: {
     colors:{
      primary: "rgb(242 238 230)",
      secondary: "rgb(163 136 113)",
      accentGreen: "rgb(143 182 159)",
      accent: "#000000",
      // accent-green: "rgb(143 182 159"
     },
     fontFamily: {
      heading: ['Arial', 'sans-serif'],
    },
    fontSize: {
      'h1': ['64px', {
        lineHeight: '1.2',
        letterSpacing: '-0.02em',
      }],
      'h2': ['30px', {
        lineHeight: '45px',
        letterSpacing: '-0.01em',
      }],
      'h3': ['32px', {
        lineHeight: '1.4',
        letterSpacing: '0',
      }],
      'p':['16px',{
        lineHeight: '1.5',
        letterSpacing: '0',
      }]
    },

    // font weight is not applied
    
    fontWeight: {
      'h1': '600px',
      'h2': 'semibold',
      'h3': 'medium',
      'p': 'normal'
    },
   
  
    },
  },
  plugins: [],
}