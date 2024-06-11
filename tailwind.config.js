// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-content': '#f5f5f5',
        'dark-content': '#1a1a1a',
      },
      screens: {
        '2xl': '1536px',
      },
      width: {
        '1/2': '20rem',
      },
    },
  },
  plugins: [],
};
