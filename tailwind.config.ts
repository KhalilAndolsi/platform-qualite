import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.75rem",
      },
      colors: {
        background: "var(--light-color)",
        foreground: "var(--main-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
