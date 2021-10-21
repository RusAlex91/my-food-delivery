<template>
  <div class="reviews">
    <div class="reviews-controls">
      <base-arrow-button mode="continue-to-item-btn"></base-arrow-button>
      <base-arrow-button mode="reverse"></base-arrow-button>
    </div>
    <div class="reviews-body">
      <review-item></review-item>
    </div>
  </div>
</template>

<script>
import ReviewItem from '../landing/LandingPageReviewItem.vue'
export default {
  components: {
    ReviewItem
  }
}
</script>

<style></style>
