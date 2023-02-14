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
      backgroundColor:{
        "green-cycle": '#369764',
        "blue-cycle": '#3C82B5',
        "aqua-cycle": '#7FCCDC',
        "yellow-cycle": '#FABF41',
        "purple-cycle": '#9A74AF',
        "red-cycle": '#E54B27',
        "gray-cycle": '#333333',
        "pink-cycle": '#F5AEB8',
        "button-submit": "#009DBF",
        "form-bg": "#F9FAFB",
        "form-border": "#D1D5DB",
      },
      textColor:{
        "green-cycle": '#369764',
        "blue-cycle": '#3C82B5',
        "aqua-cycle": '#7FCCDC',
        "yellow-cycle": '#FABF41',
        "purple-cycle": '#9A74AF',
        "red-cycle": '#E54B27',
        "gray-cycle": '#333333',
        "pink-cycle": '#F5AEB8',
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
  ],
  safelist: [{
    pattern: /(bg|text|border)-(green|blue|yellow|aqua|purple|red|gray|pink)-cycle/
    }
  ]
}
