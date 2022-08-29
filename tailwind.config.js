/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        'intro-background': 'hsl(217, 28%, 15%)',
        'main-background': 'hsl(218, 28%, 13%)',
        'footer-background': 'hsl(216, 53%, 9%)',
        'testimonials-background': 'hsl(219, 30%, 18%)',
        // accent
        'cyan1': 'hsl(176, 68%, 64%)',
        'blue1': 'hsl(198, 60%, 50%)',
        'error': 'hsl(0, 100%, 63%)'
      },
      fontFamily: {
        'raleway': ['Raleway'],
        'open-sans': ['Open Sans']
      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [],
}
