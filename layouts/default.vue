<template>
  <div class="bg-white dark:bg-gray-900">
    <navbar class="sticky top-0"></navbar>
    <Nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>
