import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF7FF",
          100: "#D9ECFF",
          200: "#B2D9FF",
          300: "#85C1FF",
          400: "#5BA7FF",
          500: "#2F8CFF",
          600: "#1F6EDD",
          700: "#1654B1",
          800: "#103C80",
          900: "#092754"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.35), transparent 60%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.25), transparent 55%)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
