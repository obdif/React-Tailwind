const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#009c86 ',
        'neutralGrey': '#717171',
        'medium': '#00e3c0', 
        'light': '#b4f7ee'  
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

