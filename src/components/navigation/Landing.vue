<template>
  <div class="nav-wrapper">
    <h1>My Food</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>Category</li>
        <li>Catalog</li>
        <li>About Us</li>
        <li>Reviews</li>
      </ul>
    </nav>
    <base-register-button mode="filled">Register</base-register-button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
h1 {
  font-size: 60px;
  font-family: 'Birthstone', cursive;
  font-weight: 400;
  margin-right: 40px;
  margin-top: 0px;
  cursor: default;
}

ul {
  font-family: 'Source Sans Pro', sans-serif;
  list-style-type: none;
  display: flex;
  gap: 30px;
  li {
    cursor: pointer;
  }
}
.nav-wrapper {
  width: 1060px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

button {
  margin-left: auto;
}
</style>
