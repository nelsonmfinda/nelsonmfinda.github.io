<template>
    <div id="down-arrow">
      <div class="down-arrow bounce">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
</template>

<script>
export default {
    components: {

    }
}

</script>

<style scoped lang="sass">

.down-arrow
  bottom: 45%
  left: 50%
  .fa-chevron-down
    color: #FFF
    font-size: 1.5rem

.bounce
  -moz-animation: bounce 3s infinite
  -webkit-animation: bounce 3s infinite
  animation: bounce 3s infinite

@-moz-keyframes bounce
  0%, 20%, 50%, 80%, 100%
    -moz-transform: translateY(0)
    transform: translateY(0)

  40%
    -moz-transform: translateY(-30px)
    transform: translateY(-30px)

  60%
    -moz-transform: translateY(-15px)
    transform: translateY(-15px)

@-webkit-keyframes bounce
  0%, 20%, 50%, 80%, 100%
    -webkit-transform: translateY(0)
    transform: translateY(0)

  40%
    -webkit-transform: translateY(-30px)
    transform: translateY(-30px)

  60%
    -webkit-transform: translateY(-15px)
    transform: translateY(-15px)

@keyframes bounce
  0%, 20%, 50%, 80%, 100%
    -moz-transform: translateY(0)
    -ms-transform: translateY(0)
    -webkit-transform: translateY(0)
    transform: translateY(0)

  40%
    -moz-transform: translateY(-30px)
    -ms-transform: translateY(-30px)
    -webkit-transform: translateY(-30px)
    transform: translateY(-30px)

  60%
    -moz-transform: translateY(-15px)
    -ms-transform: translateY(-15px)
    -webkit-transform: translateY(-15px)
</style>