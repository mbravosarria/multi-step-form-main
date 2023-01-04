/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: {
        marine_blue: 'hsl(213, 96%, 18%)',
        purplish_blue: 'hsl(243, 100%, 62%)',
        pastel_blue: 'hsl(228, 100%, 84%)',
        light_blue: 'hsl(206, 94%, 87%)',
        strawberry_red: 'hsl(354, 84%, 57%)'
      },
      neutral: {
        cool_gray: 'hsl(231, 11%, 63%)',
        light_gray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
    extend: {
      backgroundImage: {
        sidebar_desktop: "url('/images/bg-sidebar-desktop.svg')",
        sidebar_mobile: "url('/images/bg-sidebar-mobile.svg')"
      }
    }
  },
  plugins: []
}
