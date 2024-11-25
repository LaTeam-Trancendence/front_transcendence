/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      scale: {
        '40': '0.40',
        '45': '0.45',
      },
      spacing: {
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      // backgroundImage: {
      //   'custom-bg': "url('@/assets/img/fond 2 blur.png')",
      // }
    },
  },
  plugins: [],
}
