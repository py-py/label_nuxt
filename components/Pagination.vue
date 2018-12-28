<template>
  <!-- Pagination -->
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{disabled: !prev}">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item" :class="{disabled: !next}">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    countAll: {
      type: Number,
      required: true
    },
    countPage: {
      type: Number,
      required: true
    },
    prev: [String, null],
    next: [String, null],
  },
};
</script>

<style lang="scss" scoped>

</style>
