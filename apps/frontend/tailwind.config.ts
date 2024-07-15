import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["corporate", "aqua"],
  },
  theme: {
    extend: {
      colors: {
        "light-red": "#ffe5e5",
        "light-green": "#e6ffe6",
      },
      keyframes: {
        suckIn: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
            backgroundColor: "transparent",
          },
          "50%": { backgroundColor: "#ffe5e5" },
          "100%": {
            transform: "scale(0)",
            opacity: "0",
            backgroundColor: "transparent",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
            backgroundColor: "#e6ffe6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            backgroundColor: "transparent",
          },
        },
      },
      animation: {
        suckIn: "suckIn 0.35s ease-in-out forwards",
        fadeIn: "fadeIn 0.35s ease-out forwards",
      },
    },
  },
};
export default config;
