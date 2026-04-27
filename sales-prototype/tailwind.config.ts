import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          500: "#2563eb",
          600: "#1d4ed8",
          900: "#1e3a5f",
        },
        als: { light: "#ecfdf5", DEFAULT: "#059669", dark: "#064e3b" },
        ems: { light: "#f5f3ff", DEFAULT: "#7c3aed", dark: "#4c1d95" },
        ims: { light: "#fffbeb", DEFAULT: "#d97706", dark: "#78350f" },
      },
      fontFamily: {
        sans: [
          "var(--font-sans, ui-sans-serif)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
