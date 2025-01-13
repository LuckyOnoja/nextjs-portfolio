/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4d4e4f",
        secondary: "#9333EA",
        accent: "#EC4899",
      },
      fontFamily: {
        sans: ["Roboto", "Lato", "Source Sans Pro", "sans-serif"],
        heading: ["Montserrat", "Poppins", "sans-serif"],
        body: ["Merriweather", "Lora", "serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
