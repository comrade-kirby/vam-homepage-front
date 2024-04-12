/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['pl-0', 'pl-1', 'pl-2', 'pl-3'],
  theme: {
    colors: {
      'transparent': 'transparent',
      'background-primary': '#4E2A04',
      'tprimary': '#fbd6b1', 
      'tsecondary': '#F6993C',
      // 'tsecondary': '#C36609',
      // 'tsecondary': '#7180AD',
      // 'tsecondary': '#71A3AD',
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
        700: '#C36609',
        800: '#9C5207',
        900: '#4E2A04'
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
        '128': '32rem',
        '160': '40rem',
        '192': '48rem'
      }
    },
  },
  plugins: [],
}

