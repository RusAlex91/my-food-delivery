<template>
  <h2 class="reviews">Reviews</h2>
  <div class="review-box">
    <img
      src="@/assets/png/review/woman-1.jpg"
      width="80"
      height="80"
      alt=""
      class="review-box__user-img"
    />
    <h5 class="review-box__user-name">Cavin Cline</h5>

    <div class="review-box__star-rating">
      <img src="" alt="" class="star-rating__filled-star" />
      <img src="" alt="" class="star-rating__filled-star" />
      <img src="" alt="" class="star-rating__filled-star" />
      <img src="" alt="" class="star-rating__empty-star" />
      <img src="" alt="" class="star-rating__empty-star" />
    </div>
    <p class="review-box__text-review">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eos
      consequatur, autem nam, corrupti, asperiores quia eveniet sequi adipisci a
      minus tempora. Alias, facere laudantium voluptas tempora expedita
      perferendis dolor!
    </p>
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

.reviews {
  margin-top: 50px;
  margin-bottom: 50px;
}

.review-box {
  --card-color: #22222a;
  width: 500px;
  height: 150px;
  background-color: var(--card-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px;
  border-radius: 20px;
  position: relative;
  ::before {
    @include befter;
    opacity: 0.1;
    background-image: url('@/assets/png/right-quote.png');
    width: 80px;
    height: 80px;
    background-size: 80px 80px;
    top: 20px;
    right: 40px;
  }

  .review-box__user-img {
    border-radius: 60px;
    position: absolute;
    top: -40px;
    box-shadow: -1px 1px 0px 1px #14c458;
  }
  .review-box__user-name {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .review-box__star-rating {
    img {
      width: 15px;
      height: 15px;
    }

    .star-rating__empty-star {
      content: url('@/png/star-review.png');
    }
    .star-rating__filled-star {
      content: url('@/png/star-review-filled.png');
    }
  }

  .review-box__text-review {
    padding: 0;
    margin-top: 10px;
    line-height: 22px;
    color: #a4a3a8;
  }
}
</style>
