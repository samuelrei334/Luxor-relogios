import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0E10",
        surface: "#17181B",
        surface2: "#1F2023",
        hairline: "#2C2D31",
        brass: "#C9A24B",
        brassdim: "#8A754A",
        forest: "#1F3D2B",
        cream: "#EDEAE3",
        mute: "#8B8A85"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      letterSpacing: {
        widest2: "0.25em"
      }
    }
  },
  plugins: []
};
export default config;
