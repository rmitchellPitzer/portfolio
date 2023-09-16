/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '390px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '2000px',
      // => @media (min-width: 1536px) { ... }

      '6xl': '3000px',
      // => @media (min-width: 1536px) { ... }

      '8xl': '3800px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
      'hind': ['Hind', 'sans-serif']
    },
    borderRadius: {
      'landingpage': '50%'
  },
  keyframes: {
    blobs: {
      '0%': { },
      '70%': { transform: 'scale(1.3) translate(120px)' },
    },
    brightblob: {
      '0%': {},
      '33%': { transform: 'scale(0.8) translate(133px)'},
      '66%': {transform: 'scale(1.05) translate(-120px, 50px)'}
    },
    ligherblob: {
      '0%': {},
      '33%': {transform: 'scale(0.85) translate(135px)'},
      '66%': {transform: 'scale(1.10) translate(-130px, 60px)'}
    },
    topleft: {
      '0%': {},
      '33%': {transform: 'scale(1.1) translate(10px, 150px)'},
      '66%': {transform: 'scale(0.95) translate(5px, 40px)'}
    }
  },
  animation: {
    'landingpageanim': 'blobs 10s ease-in-out infinite',
    'blob1': 'brightblob 30s linear infinite',
    'blob2': 'ligherblob 30s linear infinite',
    'blob3': 'topleft 30s linear infinite'
  },
  transitionDelay: {
    '2000': '2000ms',
    '1300': '1300ms',
    '4000': '2000ms',
  }
  },
  },
  plugins: [
    require("tailwindcss-animation-delay"),]
}