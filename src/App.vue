<template class="main">
  <router-view />
  <landing-external />
</template>

<script>
import LandingExternal from './components/decoration/LandingExternal.vue'
export default {
  components: {
    LandingExternal
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,500&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Birthstone&display=swap');

body {
  margin: 0;
  // background-color: #151515;
  background: rgb(27, 27, 27);
  background: linear-gradient(
    90deg,
    rgba(27, 27, 27, 1) 0%,
    rgba(80, 80, 80, 1) 51%,
    rgba(27, 27, 27, 1) 100%
  );
}
</style>
