<template>
  <div>
    <small class="review-no">{{seen}} reviews</small>
  </div>
</template>

<script>
export default {
  props: {
    seen: {
      type: Number,
      required: true
    }
  },
}
</script>
