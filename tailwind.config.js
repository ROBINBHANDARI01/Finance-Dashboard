/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables class-based theming
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screen:{
        xs: '452px',
        sm: '640px',
        md: '768px',
        big: '956px',
        lg: '1024px',
        xlg: '1536px'
      },

      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        border: "var(--border)",

        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        primaryDark: "var(--primary-dark)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",

        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily:{
        inter: ['Inter', 'Poppins', 'sans-serif']
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};