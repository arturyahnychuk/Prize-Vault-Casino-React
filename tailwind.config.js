/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        yellow: "#FFE300",
        orange: "#ff6100",
        darkBorder: "#351206",
        blue: "#3300FF",
        darkBlue: "#160158",
        darkGray: "#AAAAAA",
        darkGray2: "#9F9F9F",
        lightGray: "#EBEBEB",
      },
      fontSize: {
        xs: "9px",
        sm: "13px",
        base: "15px",
        md: "18px",
        lg: "22px",
        xl: "25px",
        "2xl": "33px",
        "4xl": "40px",
        "5xl": "45px",
        "6xl": "55px",
      },
      screens: {
        sm: "393px"
      },
      fontFamily: {
        jomhuria: ["jomhuria", "sans-serif"],
        moul: ["moul", "sans-serif"],
        robotoRegular: ["robotoRegular", "sans-serif"],
        angkor: ["angkor", "sans-serif"],
        gurajada: ["gurajada", "sans-serif"],
        amikoRegular: ['amikoRegular', 'sans-serif'],
        amikoBold: ["amikoBold", 'sans-serif']
      },
      boxShadow: {
        'orange-md': "0px 0px 25px #FFE300",
        main: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        md: " 0px 1px 2px 0px rgba(0, 0, 0, 0.18) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        mainLinear:
          "linear-gradient(180deg, #15004F 0%, #2B00D8 42.71%, #2B00D8 68.75%, #140445 100%)",
        successLinear:
          "linear-gradient(180deg, #1DFF00 -13.75%, #0DA000 113.74%, #096301 113.75%)",
      },
    },
  },
  plugins: [],
};
