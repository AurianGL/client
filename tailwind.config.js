module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'mount': 'slideIn 1s',
        'unmount': "slideOut 1s"
      },
      keyframes: {
        slideIn: {
          "0%": {right: "300px", opacity: 0, position: "relative"},
          "100%": {right: 0, opacity: 1,  position: "relative"}
        },
        slideOut: {
          "0%": {left: 0, opacity: 1, position: "relative"},
          "100%": {left: "300px", opacity: 0,  position: "relative"}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
