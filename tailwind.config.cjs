/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,md}'],

  darkMode: ['media'],

  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/images/bg-mobile-dark.jpg')",
        'checkbox-gradient':
          'linear-gradient(120deg, hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%), transparent, transparent)'
      }
    },
    colors: {
      error: '#cf2b2b',
      success: '#539B4D',
      primary: {
        brightBlue: 'hsl(220, 98%, 61%)',
        transparent: 'transparent'
      },
      light: {
        default: 'hsl(256, 100%, 100%)',
        'grayish-light-blue': 'hsl(233, 11%, 84%)',
        'grayish-dark-blue': 'hsl(236, 9%, 61%)',
        'hard-gray-light': 'hsl(0, 0%, 98%)',
        'hard-grayish-light-blue': 'hsl(236, 33%, 92%)',
        'hard-grayish-dark-blue': 'hsl(235, 19%, 35%)'
      },
      dark: {
        'hard-dark-blue': 'hsl(235, 21%, 11%)',
        'light-desaturated-dark-blue': 'hsl(235, 24%, 30%)',
        'desaturated-dark-blue': 'hsl(235, 24%, 23%)',
        'hard-desaturated-dark-blue': 'hsl(235, 24%, 19%)',
        'grayish-light-blue': 'hsl(234, 39%, 85%)',
        'grayish-dark-blue': 'hsl(234, 11%, 52%)',
        'hard-grayish-dark-blue': 'hsl(233, 14%, 35%)',
        hover: {
          'grayish-light-blue': 'hsl(236, 33%, 92%)',
          'hard-grayish-dark-blue': 'hsl(237, 14%, 26%)'
        }
      }
    }
  }
}
