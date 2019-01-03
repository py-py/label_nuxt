<template>
  <div class="row">
    <div class="rating col">
      <div class="stars">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.checked {
  color: #25c54f;
}
</style>
