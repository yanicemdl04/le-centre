/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37',
        'gold-light': '#E5C76B',
        'gold-dark': '#B39022',
        'green-dark': '#1C4A36',
        'green-light': '#2D6A4F',
        'beige': '#F5F0E1',
        'beige-dark': '#E8DFC5'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/resto1.jpg')", // Ajout de l'image resto1.jpg
        'restaurant-interior': "url('./images/cocktail.jpg')",
        'texture': "url('https://images.pexels.com/photos/5765/texture-wall.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
};