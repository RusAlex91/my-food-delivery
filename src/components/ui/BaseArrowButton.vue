<template>
  <button class="continue-to-item-btn" :class="mode"></button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
button {
  position: relative;
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
  background-color: #24232b;
  &::after {
    @include befter;
    width: 2px;
    height: 10px;
    background-color: #fff;
    top: 10px;
    left: 16px;
    transform: rotate(50deg);
  }
  &::before {
    @include befter;
    width: 2px;
    height: 10px;
    background-color: #fff;
    top: 16px;
    left: 16px;
    transform: rotate(-50deg);
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
.reverse {
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
