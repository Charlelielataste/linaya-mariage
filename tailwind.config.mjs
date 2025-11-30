/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A961',
          dark: '#A68B4F',
          light: '#E8D9B8',
        },
        'rose-gold': '#E8B4B8',
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          light: '#F5F5F5',
          dark: '#2C2C2C',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
      },
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  plugins: [],
}

