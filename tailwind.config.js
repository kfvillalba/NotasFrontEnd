/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: { dark: "#121621", light: "#625BFF" },
      },
    },
  },
  plugins: [],
};
