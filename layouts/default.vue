<template>
  <div>
    <div
      v-if="elementVisible"
      class="absolute w-full h-full flex justify-center items-center bg-white bg-opacity-50 dark:bg-grey dark:bg-opacity-30"
    >
      <div
        class="loader z-10 ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"
      ></div>
    </div>
    <navbar></navbar>
    <Nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {
      elementVisible: true,
    }
  },
  created() {
    setTimeout(() => (this.elementVisible = false), 2000)
  },
}
</script>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
