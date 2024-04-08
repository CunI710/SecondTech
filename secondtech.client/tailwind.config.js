/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        first: '#EA3F8B',
        second: '#fff',
      },
      fontFamily: {
        rob: ['Roboto'],
        mont: ['Montserrat'],
      },
      backgroundImage: {
        'home-bg': "url('./src/assets/background/home-bg.png')",
        'home-bg2': "url('./src/assets/background/Frame_96.jpg')",
        'home-bg3': "url('./src/assets/background/home-bg2.png')",
      },
    },
  },
  plugins: [],
};
