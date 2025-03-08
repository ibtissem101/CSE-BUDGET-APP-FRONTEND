/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Base/Black': '#080325',
        'Base/White': '#FFFFFF',
        'Neutral-20': '#F8FAFC',
        'Neutral-100': '#121212',
        'Neutral-80': '#5B6776',
        'Neutral-40': '#E2E8F0',
        'Neutral-70': '#79808A',
        'Neutral-90': '#344055',
        'Violet/Main-500': '#4F46E5',
        'Neutral-10': '#C9C9C9',
        'Neutral-50': '#CBCFD5',
        'Error': '#D1493D',
        'Violet-900': '#191A38',
        'Success-500': '#2B825C',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
