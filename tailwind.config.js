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
        'bagde-bf4800': '#bf4800',
        'btn-0071e3': '#0071e3',
        'gray-f2f2f2': '#f2f2f2',
        'gray-d0d0d0': '#d0d0d0',
        'gray-7d7d7d': '#7d7d7d',
        'gray-121212': '#121212',
        'gray-707070': '##707070',
      },
      width: {
        '200px': '200px',
        '235px': '235px',
        '288px': '288px',
        '294px': '294px',
        '362px': '362px',
        '1220px': '1220px',
      },
      height: {
        '178px': '178px',
        '390px': '390px',
      },
      minWidth: {
        '820px': '820px',
      },
      spacing: {
        '1px': '1px',
      }
    },
  },
  plugins: [],
}

