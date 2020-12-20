import i18n from './lang/i18n'
export default {
  mode: 'universal',
  head: {
    title: 'ansan-resume',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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
  ],

  purgeCSS: {
    whitelist: ['dark-mode'],
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-i18n'],
  axios: {},
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
        icon: '🇺🇲',
      },
      {
        code: 'es',
        name: 'Español',
        icon: '🇪🇸',
      },
    ],
    vueI18n: i18n,
  },
  build: {},
}
