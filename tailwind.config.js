/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '/my-project/node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },

      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },

      colors: {
        text: '#fafafa',
        background: '#050505',
        primary: '#14C593',
        secondary: '#1a1a1a',
        accent: '#ffe866',

        logo: '#0EFF26',
        btn: '#14C593',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
