/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        main_color: '#bacda2',
        main_color2: '#4a7b31',
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}