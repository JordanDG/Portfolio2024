/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {

      colors: {
        // primary: '#1c1c22',
        primary: '#0e0e11',
        accent: {
          // DEFAULT: '#4169e1',
          // hover: '#3454b4',
          DEFAULT: '#5478e4',
          hover: '#8da5ed',
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}