/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191E29",
        secondary: "#132D46",
        textprimary: "",
        textsecondary: "#696E79",
        white: "#FFFFFF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        nunito: ['"Nunito Sans"', 'serif'], 
        tomorrow: ['"Tomorrow"', 'serif'], 
        mogra: ['"Mogra"', 'serif'],
        noto: ['Noto', 'serif'],
        spectral: ['Spectral', 'serif'],
        quantico: ['Quantico', 'serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

