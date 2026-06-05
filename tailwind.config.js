/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#07091a',
        cyanGlow: '#38f8ff',
        violetGlow: '#a855f7',
      },
      boxShadow: {
        neon: '0 0 30px rgba(56, 248, 255, 0.28)',
        violet: '0 0 34px rgba(168, 85, 247, 0.28)',
      },
    },
  },
  plugins: [],
};
