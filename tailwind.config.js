/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#e6c968',
          dark: '#b8941f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-delay': 'fadeIn 1.2s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fadeIn 1.2s ease-out 0.6s forwards',
        'float': 'float linear infinite',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'sound-wave-1': 'soundWave1 0.6s ease-in-out infinite',
        'sound-wave-2': 'soundWave2 0.8s ease-in-out infinite 0.1s',
        'sound-wave-3': 'soundWave3 1s ease-in-out infinite 0.2s',
      },
    },
  },
  plugins: [],
}
