/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'blue': {
        100: '#F7FDFF',
        300: '#D6F5FF'
      },
      'black-olive': '#292E1E',
      'orange': {
        400: '#F58F29',
        700: '#C36609',
        800: '#9C5207'
      }
    },
    
    // colors: {
    //   'blue': 'rgba(250, 247, 249, 0.5)',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      fontSize: {
        '2xs': '0.6rem'
      }
    },
  },
  plugins: [],
}

