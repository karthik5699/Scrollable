/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["system-ui, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto"]
      }
    },
  },
  plugins: [],
}

