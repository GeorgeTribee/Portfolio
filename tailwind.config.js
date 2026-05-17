/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#050505",
        surface: "#0d0d0d",
        accent: "#4488ff",
        "accent-2": "#7c3aed",
      },
    },
  },
  plugins: [],
};
