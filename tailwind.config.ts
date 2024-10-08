import type { Config } from "tailwindcss";
const { mauve, violet } = require("@radix-ui/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-white": "0 4px 10px rgba(255, 255, 255, 0.3)", // Sombra branca customizada
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...mauve,
        ...violet,
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
    backgroundImage: {
      bgPage: "url('/src/public/bgPage.jpg')",
    },
  },
  plugins: [],
};
export default config;
