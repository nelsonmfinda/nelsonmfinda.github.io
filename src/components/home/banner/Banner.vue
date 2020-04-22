<template>
  <div class="container">
    <div class="banner">
      <div class="is-paddingless content">
        <div class="column is-7">
          <img src="../../../assets/images/waving.gif" alt="Waving" />
          <h1 class="is-size-3 has-text-weight-bold has-text-black-ter">
            Hey there, my name is Nelson Mfinda, software engineer always up for
            learning new things and helping along the way.
          </h1>
        </div>
        <div class="column is-7">
          <p class="is-size-6 has-text-justified has-text-grey-dark">
            I constantly challenge myself to solve problems, because I'm looking
            for a challenging role in a reputable organization to utilize my
            technical, database, and management skills for the growth of the
            organization as well as to enhance my knowledge about new and
            emerging trends in the IT sector. But enough about me, how can I
            help you?
          </p>
          <p>
            <a
              class="is-mail-text has-text-black-ter"
              href="mailto:hi@nelsonmfinda.dev?subject=Hi Nelson!"
              >hi@nelsonmfinda.dev</a
            >
          </p>
        </div>
        <!-- <n-down-arrow></n-down-arrow> -->
      </div>
    </div>
  </div>
</template>

<script>
// import DownArrow from './DownArrow.vue'

export default {
  components: {
    // 'n-down-arrow': DownArrow
  },
};
</script>

<style scoped lang="sass">
.banner
  font-family: 'Open Sans'sans-serif !important
  padding-top: 5.5em;

  .is-mail-text
    border-bottom: 0.09em solid #242;
</style>
