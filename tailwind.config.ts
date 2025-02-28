import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primaryGreen: "#01AF70",

        primaryBlue: "#3555FF",

        primaryRed: "#FF0960",

        primaryWhite: "#CAD3E1",
        secondWhite: "#90A2BD99",

        primaryAzure: "#03193A",
        secondAzure: "#12294A",
        thirdAzure: "#1A3157",

        primaryBrown: "#530A0C94",

        secondBlack: "#111315CC",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
