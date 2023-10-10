/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007770',
        secondary: '#BCBCBC',
        buttonHover: '#00665f',
        gray: '#8D8D8D',
      },
    },
  },
  plugins: [],
}
