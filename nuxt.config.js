import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: 'Page not found',
    title: 'Page not found',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sgfx_line.webp' }
    ]
  },
  css: [
    '~/assets/global'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  modules: [],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'wildcard',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  vuetify: {
    treeShake: {
      loaderOptions: {
        progressiveImages: {
          sharp: true
        }
      }
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {}
}
