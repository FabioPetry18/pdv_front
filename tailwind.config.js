/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  theme: {
    extend:{
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-primary)",
        bgPrimary: "var(--color-bg-primary)",
        textbase: "var(--color-text-base)",
        accept: "var(--color-btn-accept)",
        reject: "var(--color-btn-reject)",

      }
    }
  }
}

