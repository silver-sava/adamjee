
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "assets/css/bootstrap.min.css"},
      { rel: "stylesheet", href: "assets/css/mediabox.min.css"},
      { rel: "stylesheet", href: "assets/css/font-awesome.min.css"},
      { rel: "stylesheet", href: "assets/css/animate.css"},
      { rel: "stylesheet", href: "assets/css/magnific-popup.css"},
      { rel: "stylesheet", href: "assets/css/owl.carousel.css"},
      { rel: "stylesheet", href: "assets/css/owl.theme.default.min.css"},
      { rel: "stylesheet", href: "assets/css/style.css"},
      { rel: "stylesheet", href: "assets/css/responsive.css"},
    ],
    script: [
      { src: "assets/js/plugins/mediabox/mediabox.min.js", body: true },
      { src: "assets/js/plugins/mixitup.min.js", body: true}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
