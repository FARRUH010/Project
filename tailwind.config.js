/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/images/download (1).jpeg')",
        'footer-texture': "url('./src/images/download.jpeg')",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        // Можете добавить другие шрифты, если нужно
      },
    },
  },
  plugins: [],
}

