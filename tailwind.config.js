/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        lime: {
          100: '#ecfccb',
          500: '#84cc16',
          600: '#65a30d',
        },
        cyan: {
          500: '#06b6d4',
        },
        yellow: {
          300: '#fde047',
        },
        red: {
          500: '#ef4444',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
