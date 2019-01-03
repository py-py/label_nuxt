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
        text: 'Please select a kind'
      }]
      for (let kind of this.$store.getters.loadedKinds) {
        result.push({
          value: kind.id,
          text: kind.name
        })
      }
      return result
    }
  },
  watch: {
    selected: function() {
      this.$emit('selectedKind', this.selected);
    }
  }
}
</script>
