module.exports = {
  prefix: "",
  purge: {
    content: ["./projects/application-tool/src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "system-ui"],
      serif: ["IBM Plex Serif", "Georgia"],
      mono: ["IBM Plex Mono", "SFMono-Regular"],
      display: ["IBM Plex Sans"],
      body: ["IBM Plex Sans"],
    },
    fontSize: {
      base: [
        "16px",
        {
          letterSpacing: "-0.12px",
          lineHeight: "20px",
        },
      ],
      "3xl": [
        "30px",
        {
          letterSpacing: "-0.23px",
          lineHeight: "45px",
        },
      ],
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
