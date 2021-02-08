module.exports = {
  prefix: "",
  purge: {
    content: ["./projects/application-tool/src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "Arial", "sans-serif", "system-ui"],
      serif: ["IBM Plex Serif", "Georgia", "serif"],
      mono: ["IBM Plex Mono", "SFMono-Regular", "monospace"],
      display: ["IBM Plex Sans", "Arial", "sans-serif", "system-ui"],
      body: ["IBM Plex Sans", "Arial", "sans-serif", "system-ui"],
      condensed: [
        "IBM Plex Sans Condensed",
        "Arial",
        "sans-serif",
        "system-ui",
      ],
    },
    fontSize: {
      xs: [
        "12px",
        {
          letterSpacing: "-0.09px",
          lineHeight: "20px",
        },
      ],
      sm: [
        "14px",
        {
          letterSpacing: "-0.11px",
          lineHeight: "20px",
        },
      ],
      base: [
        "16px",
        {
          letterSpacing: "-0.12px",
          lineHeight: "20px",
        },
      ],
      "2xl": [
        "24px",
        {
          letterSpacing: "-0.18px",
          lineHeight: "1",
        },
      ],
      "3xl": [
        "30px",
        {
          letterSpacing: "-0.23px",
          lineHeight: "1",
        },
      ],
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },

    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     "2xl": "6rem",
    //   },
    // },
    extend: {
      gridTemplateColumns: {
        login: "2fr 3fr 2fr",
        form: "auto 1fr",
        application: "auto 3fr 2fr",
      },
      colors: {
        gray: {
          50: "#F9F9F9",
          100: "#F5F5F5",
          200: "#ECECEC",
          300: "#D4D4D4",
          400: "#B4B4B4",
          500: "#959595",
          600: "#636363",
          700: "#545454",
          800: "#404040",
          900: "#323232",
        },
        blue: {
          50: "#f6fbfd",
          100: "#e8f6fd",
          200: "#c6e4fb",
          300: "#a1ccfb",
          400: "#6f9ffb",
          500: "#3e71fa",
          600: "#274cf7",
          700: "#243de1",
          800: "#1d30b1",
          900: "#172789",
        },
        green: {
          50: "#ecf8f6",
          100: "#d5f8ed",
          200: "#a7f3d5",
          300: "#67ebb7",
          400: "#1fdc88",
          500: "#2fc466",
          600: "#08af42",
          700: "#0e913d",
          800: "#127138",
          900: "#115c31",
        },
        red: {
          50: "#fcf8f6",
          100: "#fceeed",
          200: "#fad3da",
          300: "#f9afb8",
          400: "#fa7a83",
          500: "#fe6363",
          600: "#f4303a",
          700: "#d92534",
          800: "#af1e2e",
          900: "#8c1a27",
        },
        orange: {
          50: "#f9f5e8",
          100: "#faeec7",
          200: "#f7e28e",
          300: "#f3cd4a",
          400: "#eeac1a",
          500: "#f5983f",
          600: "#dd6407",
          700: "#bc4b0b",
          800: "#993b12",
          900: "#7d3013",
        },
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-filters"),
  ],
};
