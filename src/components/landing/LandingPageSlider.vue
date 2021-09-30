<template>
  <div>
    <div v-if="page == 0" class="slider-items">
      <product-item-template :forSale="false">Slide1</product-item-template>
      <product-item-template :forSale="false">Slide2</product-item-template>
      <product-item-template :forSale="false">Slide3</product-item-template>
    </div>
    <div v-if="page == 1" class="slider-items">
      <product-item-template :forSale="false">Slide4</product-item-template>
      <product-item-template :forSale="false">Slide5</product-item-template>
      <product-item-template :forSale="false">Slide6</product-item-template>
    </div>
  </div>
  <div class="carusel">
    <input
      @click="page = 0"
      type="radio"
      id="food-1"
      checked
      name="carusel-paginator"
    />
    <label for="food-1"></label>
    <input
      @click="page = 1"
      type="radio"
      id="food-2"
      name="carusel-paginator"
    />
    <label for="food-2"></label>
    <input
      @click="page = 2"
      type="radio"
      id="food-3"
      name="carusel-paginator"
    />
    <label for="food-3"></label>
    <input
      @click="page = 3"
      type="radio"
      id="food-4"
      name="carusel-paginator"
    />
    <label for="food-4"></label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 0
    }
  }
}
</script>

<style lang="scss">
.slider-items {
  display: flex;
  gap: 25px;
}
.carusel {
  margin-top: 20px;
  margin-bottom: 70px;
  display: flex;
  gap: 5px;
  --color: #22c051;
  input {
    cursor: pointer;
    margin: 0px;
    padding: 0px;
    width: 10px;
    height: 10px;
    background-color: #656565;
    appearance: none;
    position: relative;
    border-radius: 50%;
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color);
      opacity: 0;
      filter: drop-shadow(1px 1px 2px var(--color))
        drop-shadow(-1px -1px 2px var(--color));
    }
    &:checked {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
