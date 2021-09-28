<template>
  <button :class="mode"></button>
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
.food-card__add-item-btn {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: #14c458;
  border: 0px;
  position: relative;
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

.food-card__remove-item-btn {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  background-color: #f14555;
  border: 0px;
  position: relative;
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
</style>
