<template>
  <div class="home">
    <LandingNav></LandingNav>

    <h1>Landing Page</h1>
    <base-long-button></base-long-button>
  </div>
</template>

<script>
import LandingNav from '@/components/navigation/Landing.vue'

// @ is an alias to /src

export default {
  components: { LandingNav }
}
</script>

<style scoped>
.home {
  /* font-family: 'Montserrat', sans-serif; */
  /* font-family: 'Source Sans Pro', sans-serif; */
}
</style>
