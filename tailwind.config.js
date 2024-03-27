/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['pl-0', 'pl-1', 'pl-2', 'pl-3'],
  theme: {
    colors: {
      'blue': {
        100: '#F7FDFF',
        300: '#D6F5FF'
      },
      'black-olive': '#292E1E',
      'light-olive': '#B4BF9C',
      'orange': {
        400: "#F6993C",
        500: '#F58F29',
        700: '#C36609',
        800: '#9C5207',
        900: '#4E2A04'
      }
    },
    extend: {
      fontSize: {
        'sm': '0.9rem',
        'xs': '0.85rem',
        '2xs': '0.75rem'
      }
    },
  },
  plugins: [],
}

