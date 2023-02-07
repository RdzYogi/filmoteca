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
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'cycle-green': '#369764',
      'cycle-aqua': '#7FCCDC',
      'cycle-blue': '#3C82B5',
      'cycle-yellow': '#FABF41',
      'cycle-purple': '#9A74AF',
      'cycle-red': '#E54B27',
      'cycle-gray': '#333333',
      'cycle-gray': '#F5AEB8',
    },
    extend: {
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
