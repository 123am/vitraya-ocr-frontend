/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#a9a9a9",
        logo_primary:"#2a5db4",
        logo_text:"#353d4a",
      },
      textColor:{
        primary:"#a9a9a9",
        logo_primary:"#2a5db4",
        logo_text:"#353d4a",
      }
    },
  },
  plugins: [],
}

