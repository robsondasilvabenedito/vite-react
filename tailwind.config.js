/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#a5def5",
        first: "#0D4D8C",
        second: "#0C7EAC",
        third: "#B7E0F0",
        blank: "#F7F7F7",
        form: "#6491BE",
        main: "#92d0e8",
      }
    },
  },
  plugins: [],
}

