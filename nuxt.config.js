import i18n from './lang/i18n'
export default {
  head: {
    title: 'ansan-resume',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'this is my cv, check my skills and hire me for build your next awesome project!',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    '@nuxtjs/google-analytics',
    '@aceforth/nuxt-optimized-images',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-i18n', 'nuxt-precompress'],
  htmlValidator: {
    usePrettier: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed when using prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
      },
    },
  },
  optimizedImages: {
    optimizeImages: true,
  },
  axios: {},
  googleAnalytics: {
    id: 'UA-185847456-1',
    checkDuplicatedScript: true,
    dev: true,
    autoTracking: {
      screenview: true,
      pageviewTemplate(route) {
        return {
          page: route.path,
          title: document.title,
          location: window.location.href,
        }
      },
    },
    skipSamePath: true,
    debug: {
      enabled: false,
      sendHitTask: false,
    },
  },
  i18n: {
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
    defaultLocale: 'es',
    locales: [
      {
        code: 'en',
        name: 'English',
        icon: 'eeuu.svg',
      },
      {
        code: 'es',
        name: 'Español',
        icon: 'spain.svg',
      },
    ],
    vueI18n: i18n,
  },
  purgeCSS: {
    whitelist: ['dark-mode'],
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip'],
    },

    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },
  build: {},
}
