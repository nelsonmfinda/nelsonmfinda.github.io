<template>
    <div id="banner">
      <div class="content">
        <h1>Nelson Mfinda</h1>
        <n-down-arrow></n-down-arrow>
      </div>
    </div>
</template>

<script>
import DownArrow from './DownArrow.vue'

export default {
    components: {
      'n-down-arrow': DownArrow
    }
}

</script>

<style scoped lang="sass">
#banner
  position: relative
  display: table
  width: 100%
  height: 80vh

.content
  display: table-cell
  vertical-align: middle
  color: #FFF
  text-align: center
  font-size: 18px
  font-weight: normal
  padding: 0 2%

  h1
    text-align: center
    padding: 30px 0
    font-size: 80px
    font-weight: normal
    color: #FFF

</style>