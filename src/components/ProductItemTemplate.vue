<template>
  <div class="food-card ">
    <div class="food-card__image-wrapper">
      <img
        src="@/assets/png/food/kfc-set.png"
        alt="KFC set."
        class="food-card__item-pic"
      />
    </div>
    <div class="food-card__inner-wrapper">
      <h5 class="food-card__title">
        KFC+ Pepsi, french fries, chicken, salt.
      </h5>
      <p class="food-card__desc">Pepsi, french fries, chicken, salt.</p>
      <div class="food-card__weight-and-price">
        <span class="food-card__weight">260g</span>
        <span class="food-card__price">$20</span>
      </div>
    </div>
    <img src="@/assets/png/fire.png" alt="" class="food-card__special-offer" />
    <button class="food-card__add-item-btn continue-to-item-btn"></button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@mixin befter($display: block, $pos: absolute, $content: '') {
  content: $content;
  display: $display;
  position: $pos;
}

@mixin standard-btn {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: #14c458;
  border: 0px;

  cursor: pointer;
}

.food-card {
  --card-color: #22222a;
  width: 400px;
  height: 200px;
  background-color: var(--card-color);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* .food-card__inner-wrapper */
  &__inner-wrapper {
    display: flex;
    flex-direction: column;
  }
  /* .food-card__item */
  &__item-pic {
    width: 180px;
    margin-right: 10px;
    padding: 0px;
  }
  /* .food-card__title */
  &__title {
    font-size: 24px;
    margin: 0px;
    overflow: hidden;
    height: 25px;
    width: 150px;
  }
  /* .food-card__desc */

  &__desc {
    font-size: 14px;
    color: #716f79;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 35px;
    width: 175px;
  }

  .food-card__weight-and-price {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  /* .food-card__weight */
  &__weight {
    background-color: #16151a;
    width: 60px;
    height: 30px;
    color: #a8a6b8;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* .food-card__price */
  &__price {
    font-size: 28px;
  }
  /* .food-card__special-offer */
  &__special-offer {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 20px;
    left: 350px;
  }
  /* .food-card__add-item-btn */
  &__add-item-btn {
    position: absolute;
    top: 140px;
    left: 340px;
    display: block;
  }
}

.food-card-vertical {
  width: 220px;
  height: 240px;
  flex-direction: column;
  padding: 5px;
  .food-card {
    &__image-wrapper {
      img {
      }
    }
    &__inner-wrapper {
      padding-bottom: 100px;
    }
    &__title {
      font-weight: 400;
      font-size: 19px;
    }
    &__desc {
      height: 50px;
      width: 175px;
    }
    &__weight-and-price {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
      gap: 30px;

      // padding-right: 40px;
      // padding-bottom: 10px;
    }
    &__price {
      font-size: 24px;
    }
    &__weight {
      font-size: 12px;
    }
    &__special-offer {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -30px;
      left: 0px;
      padding: 7px;
      border-radius: 20px;
      background-color: #2d2d2d;
    }
    &__add-item-btn {
      position: absolute;
      top: 195px;
      left: 170px;
      display: block;
    }
  }
}

.add-item-btn {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: #14c458;
  border: 0px;

  cursor: pointer;
  &::after {
    position: absolute;
    content: ' ';
    border: 2px solid white;
    width: 10px;
    transform: rotate(90deg);
    top: 20px;
    left: 16px;
    background-color: #fff;
    transition: 0.2s;
  }
  &::before {
    display: block;
    content: ' ';
    border: 2px solid white;
    width: 10px;
    position: absolute;
    top: 20px;
    left: 16px;
    background-color: #fff;
    transition: 0.2s;
  }
  &:hover {
    &::after {
      position: absolute;
      content: ' ';
      background-color: #fff;
      border: 2px solid white;
      width: 12px;
      transform: rotate(132deg);
      top: 20px;
      left: 18px;
      transition: 0.2s;
    }
    &::before {
      display: block;
      content: ' ';
      background-color: #fff;
      border: 2px solid white;
      width: 6px;
      position: absolute;
      top: 22px;
      left: 14px;
      transform: rotate(40deg);
      transition: 0.2s;
    }
  }
  &:active {
    transition: 0.1s;
    background-color: #f14555;
  }
}

.remove-item-btn {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: #f14555;
  border: 0px;

  cursor: pointer;
  &::after {
    position: absolute;
    content: ' ';
    background-color: #fff;
    border: 2px solid white;
    width: 12px;
    transform: rotate(132deg);
    top: 20px;
    left: 18px;
    transition: 0.2s;
  }
  &::before {
    display: block;
    content: ' ';
    background-color: #fff;
    border: 2px solid white;
    width: 6px;
    position: absolute;
    top: 22px;
    left: 14px;
    transform: rotate(40deg);
    transition: 0.2s;
  }
  &:hover {
    &::after {
      position: absolute;
      content: ' ';
      border: 2px solid white;
      width: 10px;
      transform: rotate(90deg);
      top: 20px;
      left: 16px;
      background-color: #fff;
      transition: 0.2s;
    }
    &::before {
      transform: rotate(0deg);
      display: block;
      content: ' ';
      border: 2px solid white;
      width: 10px;
      position: absolute;
      top: 20px;
      left: 16px;
      background-color: #fff;
      transition: 0.2s;
    }
  }
  &:active {
    transition: 0.1s;
    background-color: #14c458;
  }
}

.continue-to-item-btn {
  @include standard-btn;
  &::after {
    @include befter;
    width: 4px;
    height: 13px;
    background-color: #fff;
    top: 14px;
    left: 22px;
    transform: rotate(-50deg);
  }
  &::before {
    @include befter;
    width: 4px;
    height: 13px;
    background-color: #fff;
    top: 20px;
    left: 22px;
    transform: rotate(50deg);
  }
  &:active::after {
    background-color: #000;
    transition: 0.1s;
  }
  &:active::before {
    background-color: #000;
    transition: 0.1s;
  }
  &:hover {
    background: #13b651;
  }
}
</style>
