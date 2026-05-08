/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.93)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-r": {
          "0%":   { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(1)",   opacity: "0.7" },
          "70%":  { transform: "scale(1.65)", opacity: "0" },
          "100%": { transform: "scale(1.65)", opacity: "0" },
        },
      },
      animation: {
        "fade-up":    "fade-up   0.65s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":    "fade-in   0.5s  ease-out both",
        "scale-in":   "scale-in  0.55s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in-r": "slide-in-r 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
}
