<template>
  <div class="row">
    <no-ssr>
      <rate v-model="rate" :length="5" :disabled="Boolean(!isActive)" @after-rate="onAftereRate" />
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: null,
    }
  },
  props: {
    labelRating: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true
    },
  },
  mounted() {
    this.rate = Math.round(this.labelRating)
  },
  methods: {
    onAftereRate(rate) {
      this.$emit('set-rating', rate)
    }
  },
}
</script>
