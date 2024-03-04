import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        leftcolor: "#4F4D4D",
        rightcolor1: "#EDEDED",
        rightcolor2: "#C9C9C9",
        // iconhover: "#000000",
        // iconcolor: "#222222",
        backgroundcolor: "#0d484e",
        leftTextColor: "#FFFFFF",
        rightTextColor: "#000000",
      },

      fontFamily: {
        audiowide: ["Audiowide", "sans-serif"],
        julee: ["Julee", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
