/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titillium-web': ['Titillium Web', 'sans-serif'],
      },
      colors: {
        white: '#F9F9F9',
        text: '#00000029',
        primary: '#5C1F06',
        orange: '#D97852', 
        lightbrown: '#D1B3A7',
        darkGray: '#524641',
        mediumGray: '#CCCCCC',
        black: '#000000',
      },
       screens: {
      'sm': '500px',
      'md': '880px', // Adjusted medium breakpoint to 880px
      'lg': '1100px',
      'xl': '1400px',
    }
    },
  },
  plugins: [],
};
