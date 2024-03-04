import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F04C4D",
        secondary: "#8B8E92",
        gray: "#363A43",
        "dark-gray": "#23262d",
      },
    },
  },
  plugins: [],
};
export default config;
