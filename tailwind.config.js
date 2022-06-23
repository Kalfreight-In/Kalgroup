module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
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
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        heading: '3rem',
        subheading: '1.6rem',
        desc: '1.3rem',
        navsmall: '14px',
        navsmallne: '10px;',
        descnew: '1rem',
        footerheading: '24px',
        '36px': '36px',
        '16px': '12px',
        navlgtext: '18px',
        navdropdown: '0.9rem',
        contactdesc: '16px',
        aboutbutton: '22px',
      },
      fontWeight: {
        heading: '700',

        'sub-heading': '600',

        desc: '400',
      },

      fontFamily: {
        heading: 'Poppins',

        'sub-heading': 'Poppins',

        desc: 'Poppins',
      },
      colors: {
        yellow: {
          bg: '#FFAB53',
          text: '#fff',
          shadow: '#CE9D6BC2',
          shadowhover: '#FFAF5C',
        },
        Heading: '#292E3D',

        Description: '#5E5B5B',
        Darkblue: '#22334C',
        Lightblue: '#0076BD',
        facebookblue: '#395898',
        whitenew: '#F1F1F1',
        inputborder: '#E0E3EB',
        neautralform: '#292E3D',
        businessbackground: '#f2f2f2',
        footerbackground: '#E0E0E0',
        footersocialnew: '#6082B6',
        instafooterhover: '#833AB4',
        linkdenfooterhover: '#094b6b',
        navdropdownbgtransparent: '#e6e6e626',
        navdropdownbottom: '#ffffff54',
      },
      spacing: {
        '30rem': '33rem',
        '10rem': '10rem',
        footerarrowspace: '10px',
      },
      width: {
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',

        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '95vw': '95vw',
        '100vw': '100vw',
        '30rem': '30%',
        '80rem': '80%',
        '25rem': '25%',
        '50rem': '30rem',
        '35vw': '35vw',
        contacttabinput: '90%',
        inputmap: '40rem',
      },
      height: {
        '40rem': '40rem',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '55vh': '55vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '85vh': '85vh',
        '80vh': '80vh',
        '67vh': '67vh',
        30: '30rem',
        'medium-height': '90vh',
        mobileMainImageHeight: '80vh',
        mobileSecondImage: '54vh',
        contactimg: '80vh',
        aboutImage: '',
      },
      lineHeight: {
        '44px': '44px',
      },
      maxWidth: {
        emailcontacticon: '3rem',
      },
      margin: {
        '5px': '3.5px',
      },
    },
  },
};
