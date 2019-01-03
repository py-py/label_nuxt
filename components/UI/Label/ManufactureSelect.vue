<template>
  <div class="mb-1">
    <b-form-select v-model="selected" :state="Boolean(selected)" :options="options"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
    }
  },
  computed: {
    options: function() {
      let result = [{
        value: null,
        text: 'Please select a manufacture'
      }]
      for (let manufacture of this.$store.getters.loadedManufactures) {
        result.push({
          value: manufacture.id,
          text: manufacture.name
        })
      }
      return result
    }
  },
  watch: {
    selected: function() {
      this.$emit('selectedManufacture', this.selected);
    }
  }
}
</script>
