import { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hoshiyomi: "#333185",
        comet: "#7AA9ED",
        stellar: "#191C21",
        hoshi: "#F4C2AB",
        shiro: "#FDFEFF",
        gure: "#9CA0A4",
        kuro: "#000",
      },
      keyframes: {
        enter: {
          "0%": { transform: "translateY(1.75rem)", opacity: "0" },
          "50%": { transform: "translateY(0.75rem)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", scale: "1", opacity: "1" },
        },
        leave: {
          "0%": { transform: "translateY(0)", scale: "1", opacity: "1" },
          "50%": { transform: "translateY(0.75rem)", opacity: "0.5" },
          "100%": { transform: "translateY(1.75rem)", opacity: "0" },
        },
      },
      animation: {
        enter: "enter 0.15s ease-out",
        leave: "leave 0.15s ease-out",
      },
    },
  },
  plugins: [Typography],
} satisfies Config;
