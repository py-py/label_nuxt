<template>
  <b-input-group class="mb-1">
    <b-form-select v-model="selected" :state="Boolean(selected)" :options="options"/>
    <b-input-group-append v-if='hasPermission'>
      <b-btn variant="success" @click="showModalManufacture()">Add</b-btn>
    </b-input-group-append>
  </b-input-group>
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
        text: 'Select a manufacture'
      }]
      for (let manufacture of this.$store.getters.loadedManufactures) {
        result.push({
          value: manufacture.id,
          text: manufacture.name
        })
      }
      return result
    },
    hasPermission: function() {
      return this.$store.getters.hasPermission;
    }
  },
  methods: {
    showModalManufacture() {
      // SHOW MODAL WINDOW;
    }
  },
  watch: {
    selected: function() {
      this.$emit('selectedManufacture', this.selected);
    }
  }
}
</script>
