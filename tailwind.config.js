/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1320px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'search': "url('/src/shared/images/for-search-input/search_24dp_FILL0_wght400_GRAD0_opsz24 (4) 1.svg')",
        'arrow-list': "url('/src/shared/images/for-nav-select/Vector.svg')",
        'arrow-list-white': "url('/src/shared/images/for-nav-select/Vector-white.svg')",
        'blue-list': "url('/src/widgets/images/for-question-card/article_24dp_FILL0_wght400_GRAD0_opsz24 (1) 1.svg')",
        'read-time': "url('/src/shared/images/for-read-time/schedule_24dp_FILL0_wght400_GRAD0_opsz24 (2) 1.svg')",
        'back-arrow': "url('/src/shared/images/for-back-button/Vector.svg')",
        'close': "url('/src/app/assets/icons/close.svg')",
        'support': "url('/src/app/assets/icons/contact_support.svg')",
        'done': "url('/src/app/assets/icons/done_all.svg')",
      },
      keyframes: {
        rotate: {
          '0%': { strokeDashoffset: '265' },
        },
      },
      animation: {
        rotate: 'rotate 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

