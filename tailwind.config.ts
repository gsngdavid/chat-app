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
      boxShadow: {
        top: "rgba(255, 255, 255, 0.06) 0px 2px 4px 0px inset;",
        bottom: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;",
      },
    },
  },
  plugins: [],
};
export default config;
