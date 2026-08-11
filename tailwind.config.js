/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cloud: "#F7F8FA",
        navy: "#0F1729",
        blueprint: "#2454FF",
        graphite: "#5C6478",
        teal: "#17D9B4",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
