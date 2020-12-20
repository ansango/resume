<template>
  <div v-if="renderComponent">
    <nav class="w-full flex justify-end text-gray-600 bg-transparent p-2">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="px-4 py-3 mt-2 text-sm font-semibold bg-transparent focus:outline-none focus:shadow-outline dark:text-gray-100"
      >
        <img
          class="w-10 h-10"
          :src="require(`~/assets/img/icons/${locale.icon}`)"
          :alt="`${locale.code}`"
        />
      </nuxt-link>
      <a
        class="flex flex-row items-center px-4 py-2 mt-2 bg-transparent focus:outline-none focus:shadow-outline cursor-pointer dark:text-gray-100"
        @click="toggle"
      >
        <svg
          v-if="$colorMode.preference === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span class="hidden">dark theme</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      renderComponent: true,
    }
  },
  computed: {
    setThemeDefault() {
      return this.$colorMode.preference === 'dark'
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true
      })
    },
  },
}
</script>

<style></style>
