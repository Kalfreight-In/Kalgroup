module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        heading: "3rem",
        subheading: "1.6rem",
        desc: "1.3rem",
        navsmall: "14px",
        navsmallne: "10px;",
        descnew: "1rem",
        footerheading: "34px",
        "36px": "36px",
        "16px": "18px",
        // '8px':'10px'
      },
      fontWeight: {
        heading: "700",

        "sub-heading": "600",

        desc: "400",
      },

      fontFamily: {
        heading: "Poppins",

        "sub-heading": "Poppins",

        desc: "Poppins",
      },
      colors: {
        yellow: {
          bg: "#FFAB53",
          text: "#fff",
          shadow: "#CE9D6BC2",
          shadowhover: "#FFAF5C",
        },
        Heading: "#292E3D",
        Description: "#5E5B5B",
        Darkblue: "#22334C",
        Lightblue: "#0076BD",
        whitenew: "#F1F1F1",
        inputborder: "#E0E3EB",
        neautralform: "#292E3D",
        businessbackground: "#f2f2f2",
      },
      spacing: {
        "30rem": "33rem",
        "10rem": "10rem",
      },
      width: {
        "50vw": "50vw",
        "70vh": "70vh",
        "30rem": "30%",
        "80rem": "80%",
        "25rem": "25%",
        "50rem": "30rem",
        "35vw": "35vw",
      },
      height: {
        "40rem": "40rem",
        "65vh": "67vh",
        "55vh": "55vh",
        "medium-height": "90vh",
        mobileMainImageHeight: "50vh",
        mobileSecondImage: "54vh",
        'contactimg':"80vh"
      },
      lineHeight: {
        "44px": "44px",
      },
    },
  },
};
