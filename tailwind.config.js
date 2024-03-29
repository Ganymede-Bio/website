module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/molecule_constellation.png')",
      },
      colors: {
        "nathan-orange": "#DD7E6Bff",
        "regal-purple-light": "#736bddff",
        "regal-purple": "#4339abff",
        "regal-purple-dark": "#352b88ff",
        "sea-foam": "#6BDD7Eff",
        "twilight": "#3d59ff",
        "color-header": "#13102B"
      },
      scale: {
        '-1': '-1'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};