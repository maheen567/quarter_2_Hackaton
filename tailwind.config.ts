import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#0D0D0D",
        customYellow: "#FF9F0D",
        customGray: "#E0DFDF",
      },

      FontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "serif"],
        greatVibes: ["GreatVibes", "cursive"],
      }
      }     
    },

plugins: []
};

