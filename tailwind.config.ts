import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#DADCE0",
        aliceBlue: "#F1F5F9",
        gray: "#64758B",
        blue1: "#94A3B8",
        lightBlack: "#252424",
      },
    },
    boxShadow: {
      "custom-1": "0px 0px 8px 0px #38464D40",
      "custom-2": "0px 0px 40px 0px #195BDF66",
    },
  },
  plugins: [],
};
export default config;
