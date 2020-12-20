<template>
  <div class="dark:bg-gray-900">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <sidebar class="md:w-1/3 p-2 md:flex md:justify-center"></sidebar>
      <content-main class="md:w-2/3 p-2"></content-main>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import ContentMain from '~/components/ContentMain.vue'
export default {
  components: {
    Sidebar,
    ContentMain,
  },
}
</script>

<style></style>
