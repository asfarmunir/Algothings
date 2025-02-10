import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'], // Default sans font
        lexend: ['var(--font-lexend)'],
        openSans: ['var(--font-open-sans)'],
        outfit: ['var(--font-outfit)'],
        spaceGrotesk: ['var(--font-space-grotesk)'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(69, 241, 117, 0.7) 0%, rgba(0, 195, 206, 0.7) 50%, rgba(2, 9, 7, 0.7) 100%)',
        'custom-gradient-bg': ` linear-gradient(180deg, #00C3CE 0%, #04110D 100%),
                                linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customgreen: "#45F175",
        customblue: "#00C3CE",
        customlight: "#FFFFFFCC",
        customgray: "#6B7B8B",
        customlightgray: "#999F9F",
        customborder: "#FFFFFF33",
        customcard: "#04110D"

      },
      boxShadow: {
        'green-inner': 'inset 0 0 10px 5px rgba(69, 241, 117, 0.6)',
      },

    },
  },
  plugins: [

    require("tailwind-scrollbar"),

  ],
} satisfies Config;
