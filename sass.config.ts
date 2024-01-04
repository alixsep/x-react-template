/*
 * sass/css configuration for vite
 * Make sure you don't add any actual style into the additional data, because you'll end up with duplicate css.
 * Just import things like variables, mixins and etc.
 */
const sassConfig = {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @import "./src/scss/variables.scss";
        @import "./src/scss/mixins.scss";
        @import "./src/scss/keyframes.scss";
      `,
    },
  },
}
export default sassConfig
