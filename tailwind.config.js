/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'author': "url('https://i.ibb.co.com/ZYFdrLP/portfolio-image.png')",
        'hero': "url('https://i.ibb.co.com/qCh9vZR/bg.png')",
        'lightPink': "url('https://i.ibb.co.com/MRj73Nx/light-pink-bg.webp')",
        'multiColor': "url('https://i.ibb.co.com/PZKqX9q/multicolor-gradient.jpg')",
      },
      colors: {
        'main': '#630030'
      },
      fontFamily: {
        'montserrat': ["Montserrat Alternates", "serif"]
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

