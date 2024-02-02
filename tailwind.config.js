/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A0921',
        'light-blue': '#1454F5',
        'marine-blue': '#013FE5'
      }
    }
  },
  plugins: []
}
