/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-color':'#3f649a'
      }
    },
    screens: {
      'md': '768px',
    },
  },
  plugins: [],
}

