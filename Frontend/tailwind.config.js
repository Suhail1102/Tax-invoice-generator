/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      light:{
          bg: "#ffffff", 
        text: "#1a202c",
      },
      dark: {
        bg: "#1a202c", // Background color for dark mode
        text: "#ffffff", // Text color for dark mode
      },
    },
  },
  plugins: [],
}