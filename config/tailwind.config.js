const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/javascript/**/*.jsx',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors:{
        green:{
          cycle: '#369764',
        },
        "green-cycle": '#369764',
        cycle_aqua: '#7FCCDC',
        cycle_blue: '#3C82B5',
        cycle_yellow: '#FABF41',
        cycle_purple: '#9A74AF',
        cycle_red: '#E54B27',
        cycle_gray: '#333333',
        cycle_gray: '#F5AEB8',
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
