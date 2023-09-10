/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f3f3f3",
        black: "#000",
        gray: {
          "100": "#fefefe",
          "200": "#fefefa",
          "300": "#fafafa",
          "400": "#81858c",
          "500": "#121214",
          "600": "#04060e",
        },
        royalblue: {
          "200": "#005ee1",
          "300": "#005eda",
        },
        white: "#fff",
        lightgray: "#d1d1d1",
        mediumslateblue: {
          "100": "#aa70ff",
          "200": "#9665fc",
        },
        snow: "#fffcfc",
        darkslategray: {
          "100": "#3e3e3e",
          "200": "#363435",
        },
        gainsboro: {
          "100": "#ddd",
          "200": "#d9d9d9",
        },
        blueviolet: "#8851ff",
        mediumblue: {
          "100": "#6800eb",
          "200": "rgba(104, 0, 235, 0.49)",
        },
        darkgray: "#9d9d9d",
      },
      spacing: {},
      fontFamily: {
        "biz-udpgothic": "'BIZ UDPGothic'",
        inter: "Inter",
        outfit: "Outfit",
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        "11xl": "30px",
        "81xl": "100px",
        "128xl": "147px",
        "126xl-4": "145.4px",
        "lgi-4": "19.4px",
        "8xs": "5px",
        "7xs-3": "5.3px",
        "mini-1": "14.1px",
        "3xl": "22px",
        "131xl": "150px",
      },
    },
    fontSize: {
      smi: "13px",
      base: "16px",
      "8xl": "27px",
      "smi-7": "12.7px",
      "mini-5": "14.5px",
      "smi-6": "12.6px",
      "4xs-7": "8.7px",
      "xs-5": "11.5px",
      "16xl-2": "35.2px",
      "sm-2": "13.2px",
      "base-8": "15.8px",
      "14xl": "33px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
