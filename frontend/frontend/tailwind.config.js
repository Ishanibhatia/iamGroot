

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: "#a3a4a5",
        gold: "#f5d638",
        gray: {
          "100": "#757575",
          "200": "rgba(117, 117, 117, 0.5)",
          "300": "rgba(255, 255, 255, 0)",
        },
        black: "#000",
        crimson: "#ff3f6c",
        chocolate: "#f26a10",
        darkslategray: "#282c3f",
        whitesmoke: "#f5f5f6",
        deeppink: "#f41cb2",
      },
      spacing: {},
      fontFamily: {
        assistant: "Assistant",
        "archivo-black": "'Archivo Black'",
        inherit: "inherit",
      },
      borderRadius: {
        "21xl": "40px",
        xl: "20px",
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      "6xl": "1.563rem",
      mini: "0.938rem",
      lg: "1.125rem",
      "3xs": "0.625rem",
      xs: "0.75rem",
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    screens: {
      'min1500': { 'min': '1500px' },
      'max2000': { 'max': '2000px' },
      'between1500And2000': { 'raw': '(min-width: 1500px) and (max-width: 2000px)' },
      'min1700': { 'min': '1750px' },
      'between1700And2000': { 'raw': '(min-width: 1750px) and (max-width: 2000px)' },
      mq2000: {
        raw: "screen and (max-width: 2000px)",
      },

      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      'lg1400': '1400px',
      mq1525: {
        raw: "screen and (min-width: 1550px)",
      },
      mq1426: {
        raw: "screen and (min-width: 1426px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

