/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '40rem',
      },
      fontFamily :{
        'quicksand': 'Quicksand',
        'tangerine': 'Tangerine',

      }
    },
  },
  plugins: [],
}
