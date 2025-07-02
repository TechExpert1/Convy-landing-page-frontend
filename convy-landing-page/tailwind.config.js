/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'convy-teal': '#00BCD4',
        'convy-dark': '#1a1a1a',
        'convy-gray': '#f8f9fa',
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1152px",
      },
      
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


//define screensizes
