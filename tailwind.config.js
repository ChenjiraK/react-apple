/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        '32px': '32px',
      },
      colors: {
        'primary-color': '#424245',
        'gray-f2f2f2': '#f2f2f2',
      },
      width: {
        '1220px': '1220px',
      }
    },
  },
  plugins: [],
}

