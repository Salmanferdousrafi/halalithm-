/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#edf7f0",
          100: "#d0ecd8",
          200: "#a3d9b2",
          300: "#6ec48a",
          400: "#3daf64",
          500: "#16A34A",
          600: "#0E7A3B",
          700: "#0f5c2e",
          800: "#0c3d1f",
          900: "#072010"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
