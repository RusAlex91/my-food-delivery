<template>
  <img
    ref="plate"
    class="landing-deco"
    src="../../assets/landing/under-landing-food.png"
    alt=""
    width="500"
  />
  <button></button>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const plate = ref(null)
    onMounted(() => {
      window.addEventListener('scroll', function () {
        plate.value.style.transform =
          'rotate(' + window.pageYOffset / 8 + 'deg)'
      })
    })
    return {
      plate
    }
  }
  // mounted () {
  //   const elem = this.$refs.plate
  //   window.addEventListener('scroll', function () {
  //     elem.style.transform = 'rotate(' + window.pageYOffset / 8 + 'deg)'
  //   })
  // }
}
</script>

<style scoped>
.landing-deco {
  position: fixed;
  top: 10px;
  z-index: -1;
  /* animation: spin 5s infinite; */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
