/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./MonSite/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1.5xl": "1408px",
      "2xl": "1536px",
    },
    extend: {
      colors : {
        primary : "rgb(8, 197, 8)",  
      },
      fontFamily : {
        bahnschrift : ['"Arial"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
