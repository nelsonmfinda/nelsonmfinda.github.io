<template>
    <div id="banner">
      <div class="content">
        <div class="column is-7 is-offset-3">
          <h1>Hello,</h1>
        </div>
        <div class="column is-7 is-offset-3">
          <p>I'm Nelson Mfinda, Software Developer based in Luanda, Angola who loves<br /> build beautiful products that satisfy user needs.</p>
          <p>Talk to me <a class="contact-me has-text-info" href="mailto:hi@nelsonmfinda.dev">hi@nelsonmfinda.dev</a></p>
          <p>
            <a href="https://github.com/nelsonmfinda">
              <i class="fab fa-github"></i>
            </a>
            <a href="http://twitter.com/@nelsonmfinda">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/nelsonmfinda/">
              <i class="fab fa-linkedin"></i>
            </a>
          </p>
        </div>
        <!-- <n-down-arrow></n-down-arrow> -->
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
  padding: 0 2%

  h1
    text-align: left
    padding: 30px 0
    font-size: 80px
    font-weight: normal
    color: #FFF

  p
    color: #FFF
    font-size: 1.4rem
    text-align: justify

    a
      color: #FFF

.contact-me
  text-transform: underline

.fab
  font-size: 1.5rem
  margin-right: 20px

</style>
