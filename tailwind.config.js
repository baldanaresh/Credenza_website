/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '160':'40rem' // Custom height value
        // Add more custom heights as needed
      }
    },
  },
  plugins: [],
}

