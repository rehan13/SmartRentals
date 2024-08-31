/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3AA6B9',
        secondary: '#FF9EAA',
      }
    },
  },
  plugins: [],
}

