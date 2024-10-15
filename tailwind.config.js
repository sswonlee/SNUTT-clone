/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        orange: '#F58D3D',
        orangeHover: 'rgba(245,141,61,0.8)',
        gray: '#c4c4c4',
      },
      fontFamily: {
        pret: ['Pretendard'],
      },
    },
  },
  plugins: [],
};
