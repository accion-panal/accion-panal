/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pingLow: {
          '0%': { transform: 'scale(.9)', opacity: '1' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        'heart': {
          '0%': { transform: 'none' },
          '50%': { transform: 'scale(1.04)' },
          '100%': { transform: 'none' }
        },
      },
      animation: {
        pingLow: 'pingLow 1.5s ease-in-out infinite',
        'heart': 'heart 1.5s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'primary': '#009245',
      'primary-opacity': '#00E56C',
      'panal': {
        'cyan': '#1ea498',
        'purple': '#4e2772',
        'red': '#ed4f44',
        'lime': '#39b54a',
        'yellow': '#f1bd21',
        'green': '#009245',
        'orange': '#f09425',
        'skyblue': '#95b8f6',
      },
    },
  },
  plugins: [],
}
