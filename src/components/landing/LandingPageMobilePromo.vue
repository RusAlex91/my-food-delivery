<template>
  <div class="mobile-app-promo-banner">
    <div class="get-it-on">
      <img
        src="../../assets/landing/google-play-badge.svg"
        alt=""
        class="get-it-on__google-play"
        width="160"
      />
      <img
        src="../../assets/landing/app_store_badge.svg"
        alt=""
        class="get-it-on__app-store"
        width="140"
      />
    </div>
    <img
      src="../../assets/landing/woman.png"
      alt=""
      class="woman-mobile-promo"
      width="200"
    />
    <div class="download-app-discount">
      <span class="download-app-discount__discount-percent">-30%</span>
      <span class="download-app-discount__discount-text">discount</span>
      <span class="download-app-discount__discount-text-promo"
        >when downloading the app</span
      >
      <button class="download-app-discount__download-app">
        download application
      </button>
    </div>
    <img
      src="../../assets/landing/sushi-promo-app.png"
      alt=""
      class="food-promote"
      width="500"
    />
  </div>
  <div class="mobile-app-promo-presentation">
    <img src="../../assets/landing/app-promo.png" alt="" class="app-img" />
    <div class="app-promo">
      <span class="app-promo__title"
        >Our <br />
        application</span
      >
      <span class="app-promo__text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        eligendi nulla eius doloribus reprehenderit</span
      >
      <base-register-button>Register</base-register-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.mobile-app-promo-banner {
  display: flex;
  align-items: center;
  margin-top: 150px;
  width: 1300px;
  height: 200px;
  background-color: #14c458;
}
.get-it-on {
  margin-left: 110px;
  /* .get-it-on__google-play */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &__google-play {
    cursor: pointer;
  }

  /* .get-it-on__app-store */

  &__app-store {
    margin-left: 10px;
    cursor: pointer;
  }
}
.woman-mobile-promo {
  position: relative;
  bottom: 44px;
}
.download-app-discount {
  /* .download-app-discount__discount-percent */
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.8fr 1fr;
  gap: 0px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    'one one two two'
    'three three three three'
    'fourh fourh fourh fourh';
  justify-items: center;
  font-family: 'Montserrat', sans-serif;

  &__discount-percent {
    font-size: 54px;
    color: #035524;
    font-weight: bold;
    grid-area: one;
    align-self: end;
    transform: rotate(-5deg);
  }

  /* .download-app-discount__discount-text */

  &__discount-text {
    font-size: 36px;
    color: white;
    font-weight: bold;
    grid-area: two;
    align-self: end;
    transform: rotate(5deg);
  }

  /* .download-app-discount__discount-text-promo */

  &__discount-text-promo {
    font-size: 14px;
    grid-area: three;
    align-self: center;
  }

  /* .download-app-discount__download-app */

  &__download-app {
    width: 200px;
    height: 40px;
    font-size: 12px;
    background-color: #09933e;
    border-radius: 20px;
    text-transform: uppercase;
    grid-area: fourh;
    cursor: pointer;
    animation: transfusion 3s ease-in-out infinite;
    &:hover {
      background-color: #055724;
    }
  }
}

@keyframes transfusion {
  0% {
    border-bottom: 2px solid transparent;
  }
  50% {
    border-bottom: 2px solid rgb(0, 243, 32);
  }
  100% {
    border-bottom: 2px solid transparent;
  }
}

.food-promote {
  position: relative;
  bottom: 50px;
}
.mobile-app-promo-presentation {
  display: flex;
  margin-top: 100px;
  column-gap: 34px;
}
.app-img {
}
.app-promo {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  justify-content: center;
  /* .app-promo__title */
  &__title {
    font-size: 38px;
    font-weight: bold;
  }

  /* .app-promo__text */

  &__text {
    font-size: 12px;
    width: 300px;
    height: 70px;
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 20px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-left: 2px solid #1bf36e;
    opacity: 0.7;
    background-color: #22222a;
  }
}
</style>
