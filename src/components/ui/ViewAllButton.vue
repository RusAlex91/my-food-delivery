<template>
  <div class="view-all-btn">
    <span class="view-all-btn__text">View all</span>
    <button class="continue-to-item-btn"></button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.view-all-btn {
  width: 150px;
  height: 42px;
  background-color: #173921;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  border: 2px solid #136330;
  align-items: center;
  cursor: pointer;

  button {
    position: relative;
    left: 24px;
    top: 0px;
  }
  &__text {
    position: relative;
    font-size: 18px;
  }
  &:hover {
    border: 2px solid #20a751;
    background-color: #14c458;
    transition: 0.3s;
  }
  &:active {
    border: 2px solid #20a751;
    background-color: #14c458;
    color: #000;
  }
}
@mixin standard-btn {
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: #14c458;
  border: 0px;

  cursor: pointer;
}

@mixin befter($display: block, $pos: absolute, $content: '') {
  content: $content;
  display: $display;
  position: $pos;
}
.continue-to-item-btn {
  @include standard-btn;
  &::after {
    @include befter;
    width: 2px;
    height: 10px;
    background-color: #fff;
    top: 10px;
    left: 18px;
    transform: rotate(-50deg);
  }
  &::before {
    @include befter;
    width: 2px;
    height: 10px;
    background-color: #fff;
    top: 16px;
    left: 18px;
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
