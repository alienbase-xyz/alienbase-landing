import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,css}"],
    exclude: ["node_modules", ".git", ".output"],
  },
  plugins: [require("windicss/plugin/forms")],
  theme: {
    colors: {
      white: "#ffffff",
      background: "#010814",
      headline: "#EEF0F4",
      body: "#9FA9B9",
      green: "#03D883",
      outline: "#1E2531",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1/2xl": "1408px",
      "2xl": "1536px",
      "3xl": "2048px",
      "4xl": "3840px",
    },
  },
});
