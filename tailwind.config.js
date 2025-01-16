/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        p:{
          softRed:'hsl(7, 99%, 70%)',
          yellow:'hsl(51, 100%, 49%)',
          graphicDesignText:'hsl(167, 40%, 24%)',
          photographyText:'hsl(198, 62%, 26%)',
          footer:'hsl(168, 34%, 41%)'
        },
        n:{
          veryDarkBlue:'hsl(212, 27%, 19%)',
          veryDarkGrayishBlue:'hsl(213, 9%, 39%)',
          darkGrayishBlue:'hsl(232, 10%, 55%)',
          grayishBlue:'hsl(210, 4%, 67%)',
        }
      }
    },
  },
  plugins: [],
}
