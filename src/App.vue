<template>
  <div id="app">
    <main>
      <!-- <n-header> </n-header> -->
      <n-banner> </n-banner>
    </main>
  </div>
</template>

<script>
import Header from './components/home/Header.vue'
import Banner from './components/home/Banner.vue'

export default {
  name: 'app',
  components: {
    'n-header': Header,
    'n-banner': Banner
  }
}
</script>

<style scoped lang="sass">
main
  position: relative
  display: table
  width: 100%
  background-color: #17171b
  background-size: cover
  height: 100vh
</style>
