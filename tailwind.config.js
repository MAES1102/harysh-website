/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
        },
        colors: {
          space: '#0B0E1C',
          primary: '#1E90FF',
          secondary: '#00D4FF',
        },
      },
    },
    plugins: [],
  }
  