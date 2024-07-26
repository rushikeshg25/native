module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': 'rgb(120, 69, 172)',
        'purple-dark': 'rgb(220, 184, 255)',
        'border-dark': 'rgb(150, 142, 152)',
        'border-light': 'rgb(220, 214, 222)',
      },
    },
  },
  plugins: [],
};
