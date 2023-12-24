import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            default: {
              DEFAULT: "#1e293b",
            },
            primary: {
              DEFAULT: "#1e293b",
              foreground: "#1e293b",
              50: "#f8fafc",
              100: "#f1f5f9",
              200: "#e2e8f0",
              300: "#cbd5e1",
              400: "#94a3b8",
              500: "#64748b",
              600: "#475569",
              700: "#334155",
              800: "#1e293b",
              900: "#0f172a",
            },
            secondary: {
              50: "#eef2ff",
              100: "#e0e7ff",
              200: "#c7d2fe",
              300: "#a5b4fc",
              400: "#818cf8",
              500: "#6366f1",
              600: "#4f46e5",
              700: "#4338ca",
              800: "#3730a3",
              900: "#312e81",
            },
            focus: "#64748b",
          },
        },
      },
    }),
  ],
};
export default config;
