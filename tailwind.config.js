/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Acento violeta y azul neón propuestos
          violet: "#b325eb",
          neon: "#00aaff",
          dark: "#0b0b0d",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(179,37,235,0.35)",
      },
    },
  },
  plugins: [],
}
