<template>
  <div id="app">
    <main>
      <n-header> </n-header>
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
  background-image: url('https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80') //no-repeat center center fixed
  background-size: cover
  height: 100vh
</style>
