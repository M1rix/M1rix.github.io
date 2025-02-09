/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'opacity-0', 'opacity-100', 'invisible', 'visible',
    'translate-y-[450px]', '-translate-y-[450px]', 'translate-y-0'
  ],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [],
}
