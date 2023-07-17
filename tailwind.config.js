/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#03417D',
        secondary: '#A51F1F',
        background: '#f5f5f5',
        highlight: '#EBC8C8',
        text: '#333333',
        white: '#ffffff',
        black: '#000000',
        gray: '#cccccc',
        lightGray: '#f5f5f5',
        darkGray: '#333333',
        karry: '#FFEBD2',
        tangerine: '#FFA364',
        crusta: '#FC7643',
        brown: '#AF4F41',
      },
    },
  },
  plugins: [],
};
