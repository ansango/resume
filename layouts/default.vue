<template>
  <div class="bg-white dark:bg-gray-900">
    <navbar class="sticky top-0"></navbar>
    <transition name="slide-fade">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar },
  colorMode: 'light',
}
</script>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
