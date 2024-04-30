/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['pl-0', 'pl-1', 'pl-2', 'pl-3'],
  theme: {
    colors: {
      'primary': '#F6993C', // orange
      'primary-md': '#894C06',
      'secondary': '#F7FDFF', // blue
      'white': '#fbd6b1',
      'dark': '#3B2002',
      'darker': '#1D1001',
      'black': '#140B01',
      'blue': {
        100: '#F7FDFF',
        300: '#D6F5FF'
      },
      'black-olive': '#292E1E',
      'sage': '#B4BF9C',
      'orange': {
        200: "#fbd6b1",
        400: "#F6993C",
        500: '#F58F29',
        600: '#894C06',
        700: '#3B2002',
        800: '#1D1001',
        900: '#140B01'
      }
    },
    extend: {
      fontSize: {
        'sm': '1rem',
        'xs': '0.85rem',
        '2xs': '0.75rem',
        '3xs': '0.65rem'
      },
      spacing: {
        '0.25': '0.08rem',
        '128': '32rem',
        '160': '40rem',
        '192': '48rem'
      }
    },
  },
  plugins: [],
}

