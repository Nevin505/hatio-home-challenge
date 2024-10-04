/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
        '50': '#f1f9fe',
        '100': '#e1f2fd',
        '200': '#bde5fa',
        '300': '#83d2f6',
        '400': '#3ab8ee',
        '500': '#19a2de',
        '600': '#0c82bd',
        '700': '#0b6899',
        '800': '#0d587f',
        '900': '#114a69',
        '950': '#0b2e46',
    },
    
      },
    },
  },
  plugins: [],
}