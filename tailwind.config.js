/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta profesional: grafito + cobalto técnico + acento cálido puntual
        graphite: {
          DEFAULT: "#1B1F2A",
          light: "#2A3040",
        },
        cobalt: {
          DEFAULT: "#3457D5",
          dark: "#2740A8",
        },
        amber: {
          DEFAULT: "#F2A65A",
        },
        mist: {
          DEFAULT: "#F3F5F6",
          dark: "#E4E8EA",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
