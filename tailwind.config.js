/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ini memberi tahu Tailwind file mana yang harus dipindai
  content: [
    './layouts/**/*.html', 
    './content/**/*.md',  
    './static/js/**/*.js', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}