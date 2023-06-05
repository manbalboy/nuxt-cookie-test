export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-axios-loading",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  dev: true,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["./plugins/axios"],
  serverMiddleware: [
    // Will register file from project server-middleware directory to handle /server-middleware/* requires
    // { path: "/server-middleware", handler: "~/server-middleware/index.js" },

    // We can create custom instances too
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  //  To make it work for SSR, remember to set `ssr: true` and `target: 'server'`
  ssr: true,
  target: "server",

  router: {
    // Run the middleware/user-agent.js on every page
    // middleware: ["test","test2"]
  },

  modules: ["~modules/test.js","@nuxtjs/axios", ["cookie-universal-nuxt", { alias: "cookiz" }]],

  axios: {
    withCredentials: true,
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, ctx) {
    //   if (ctx.isDev) {
    //     config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
    //   }
    // }
  },
};
