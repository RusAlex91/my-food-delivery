<template>
  <div class="landing">
    <landingNav></landingNav>
    <div class="landing-top-part-wrapper">
      <div class="landing-main-text">
        <span class="enticement">The best cuisine awaits you</span>
        <h2 class="greetings__slim">Welcome</h2>
        <h2 class="greetings__bold">To my food</h2>
        <div class="landing-discount-text">
          <span class="discount-percent">20%</span>
          <span class="discount-deco">|</span>
          <span class="discount-text">Discount upon registration</span>
        </div>
        <base-register-button mode="">Register</base-register-button>
      </div>
      <ul class="landing-media-panel">
        <li class="twitter">
          <img src="@/assets/svg/twitter.svg" alt="" width="20" height="30" />
        </li>
        <li class="facebook">
          <img src="@/assets/svg/facebook.svg" alt="" width="20" height="30" />
        </li>
        <li class="instagram">
          <img src="@/assets/svg/instagram.svg" alt="" width="20" height="30" />
        </li>
      </ul>
    </div>
    <slider></slider>
    <div class="landing-middle-part-wrapper">
      <div class="food-item-head">
        <h2>All Items</h2>
        <view-all-btn></view-all-btn>
      </div>
      <div class="food-items">
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide1</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide2</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide3</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide4</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide5</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide6</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide7</product-item-template
        >
        <product-item-template mode="food-card-vertical" :forSale="true"
          >Slide8</product-item-template
        >
      </div>
    </div>
    <appPromo></appPromo>
    <reviews></reviews>
  </div>
</template>

<script>
import LandingNav from '@/components/navigation/Landing.vue'
import Slider from '@/components/landing/LandingPageSlider.vue'
import AppPromo from '@/components/landing/LandingPageMobilePromo.vue'
import Reviews from '@/components/landing/LandingPageReviews.vue'
// @ is an alias to /src

export default {
  components: { LandingNav, Slider, AppPromo, Reviews }
}
</script>

<style scoped lang="scss">
.landing {
  margin: 0 auto;
  /* border: 10px solid #323337; */
  /* border-radius: 20px; */
  box-shadow: 1px 1px 20px 23px rgba(27, 27, 27, 0.58);
  min-width: 1300px;
  width: 1300px;
  /* height: 3000px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* font-family: 'Montserrat', sans-serif; */
  font-family: 'Source Sans Pro', sans-serif;
  background-image: url('../assets/landing/bg.png');
  background-repeat: no-repeat;
  background-color: #161616;
  color: white;
}
.landing-top-part-wrapper {
  width: 1300px;
  display: flex;
  justify-content: flex-start;
  margin-top: 90px;
  margin-bottom: 150px;
}
.landing-main-text {
  cursor: default;
  margin-left: 300px;
  .enticement {
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.5;
  }
  .greetings__slim {
    font-size: 44px;
    font-weight: lighter;
    margin: 0px;
  }
  .greetings__bold {
    margin-top: 10px;
    font-size: 44px;
    font-weight: bold;
    margin: 0px;
  }
  .landing-discount-text {
    gap: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #1bc44f;
    margin-bottom: 20px;
    .discount-percent {
      font-size: 44px;
      font-weight: bold;
    }
    .discount-deco {
      font-size: 30px;
    }
    .discount-text {
      display: inline-block;
      width: 90px;
      font-size: 12px;
    }
  }
}
.landing-media-panel {
  margin-left: auto;
  --invert: invert();
  list-style-type: none;
  width: 30px;
  height: 250px;
  background-color: #14c458;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
  .twitter {
    cursor: pointer;
    &:hover {
      filter: var(--invert);
    }
  }
  .facebook {
    cursor: pointer;
    &:hover {
      filter: var(--invert);
    }
  }
  .instagram {
    cursor: pointer;
    &:hover {
      filter: var(--invert);
    }
  }
}

.landing-middle-part-wrapper {
  display: flex;
  flex-direction: column;
  width: 900px;
  .food-item-head {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .view-all-btn {
      margin-left: auto;
    }
  }
  .food-items {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 100px; /* ⇳ only */
    column-gap: 25px; /* ⬄ only */
  }
}
</style>
