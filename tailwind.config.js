/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neumorph: {
          light: '#f0f0f3',
          dark: '#d1d1d9',
          shadow: '#b8b8be',
        }
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #d1d1d9, -8px -8px 16px #ffffff',
        'neumorph-inset': 'inset 8px 8px 16px #d1d1d9, inset -8px -8px 16px #ffffff',
        'neumorph-sm': '4px 4px 8px #d1d1d9, -4px -4px 8px #ffffff',
        'neumorph-lg': '12px 12px 24px #d1d1d9, -12px -12px 24px #ffffff',
        'neumorph-orange': '8px 8px 16px #c8a87c, -8px -8px 16px #ffe8c8',
        'neumorph-xl': '16px 16px 32px #d1d1d9, -16px -16px 32px #ffffff',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'scroll': 'scroll 30s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}