/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#e35c44",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        tertiary: "#668813",
      },
      fontFamily: {
        body: ["Roboto Mono"],
      },
    },
  },
  plugins: [],
};
