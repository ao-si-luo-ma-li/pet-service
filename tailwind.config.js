/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF9F5',
          100: '#F5E6D3',
          200: '#E8C9A0',
          300: '#D4A574',
          400: '#C4894A',
          500: '#E67E22',
          600: '#C96A1A',
          700: '#A85514',
          800: '#864010',
          900: '#6B330C',
        },
        earth: {
          50: '#F7F3EE',
          100: '#EDE4D9',
          200: '#D9C9B4',
          300: '#C5AD8E',
          400: '#B1936C',
          500: '#9D7A4E',
          600: '#8A6A3F',
          700: '#6B5338',
          800: '#56412E',
          900: '#453526',
        },
        leaf: {
          50: '#F0FAF4',
          100: '#D1F0DF',
          200: '#A8E0BE',
          300: '#74CA96',
          400: '#4AAF70',
          500: '#27AE60',
          600: '#1D8A4E',
          700: '#18693E',
          800: '#165433',
          900: '#134329',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
