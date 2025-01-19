/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          softRed:'hsl(7, 99%, 70%)',
          yellow:'hsl(51, 100%, 49%)',
          yellowLight:'hsl(51, 85%, 73%)',
          graphicDesignText:'hsl(167, 40%, 24%)',
          photographyText:'hsl(198, 62%, 26%)',
          footer:'hsl(168, 34%, 41%)'
        },
        neutral:{
          veryDarkBlue:'hsl(212, 27%, 19%)',
          veryDarkGrayishBlue:'hsl(213, 9%, 39%)',
          darkGrayishBlue:'hsl(232, 10%, 55%)',
          grayishBlue:'hsl(210, 4%, 67%)',
        }
      },
      fontFamily:{
        Barlow:['Barlow','serif'],
        Fraunces:['Fraunces','serif']
      }
    },
  },
  plugins: [],
}

