<template>
  <div class="row">
    <no-ssr>
      <rate v-model="rate" :length="5" :disabled="Boolean(!isActive)" @after-rate="onAftereRate" />
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onAftereRate(rate) {
      console.log(this);
    }
  },
  computed: {
    rate: function(context) {
      return Math.round(this.rating)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
