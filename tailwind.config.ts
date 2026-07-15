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
        background: "var(--bg)",
        foreground: "var(--ink)",
        brand: {
          bg: "var(--bg)",
          bgAlt: "var(--bg-alt)",
          ink: "var(--ink)",
          teal: "var(--teal)",
          tealDeep: "var(--teal-deep)",
          coral: "var(--coral)",
          yellow: "var(--yellow)",
          lavender: "var(--lavender)",
          dark: "var(--dark)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
