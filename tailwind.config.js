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
        "nathan-orange": "#DD7E6B",
        "regal-purple": "#352b88ff",
      },
    },
  },
  plugins: [],
};
