<template>
  <button :class="mode" @click="$router.push('/register')">
    <slot></slot>
  </button>
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
  text-decoration: none;
  display: inline-block;
  width: 130px;
  height: 33px;
  border-radius: 20px;
  color: white;
  background-color: #13c557;
  cursor: pointer;
  border: 0px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  &:hover {
    transition: 0.2s all ease;
    color: #4e1a22;
  }
  &:active {
    color: #6f2631;
  }
}

.filled {
  color: #0f9751;
  border: 1px solid #0f9751;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  background-position: right;
  &:hover {
    transition: 0.2s all ease;
    color: white;
    background-color: #13c557;
  }
  &:active {
    color: #6f2631;
  }
}
</style>
