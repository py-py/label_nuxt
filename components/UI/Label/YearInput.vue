<template>
  <div class="mb-1">
    <b-form-input
      id="inputYear"
      type="number"
      :min="minYear"
      :max="maxYear"
      v-model="inputed"
      :state="isValidYear"
      placeholder="Enter a year of label"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputed: null
    };
  },
  computed: {
    maxYear() {
      return new Date().getFullYear();
    },
    minYear() {
      return this.maxYear - process.env.maxDifferenceYear;
    },
    isValidYear: function() {
      return !isNaN(this.inputed) &&
        this.inputed <= this.maxYear &&
        this.inputed >= this.minYear
        ? true
        : false;
    }
  },
  mounted: function() {
    this.inputed = this.maxYear;
  },
  watch: {
    inputed: function() {
      if (this.isValidYear) this.$emit("yearLabel", this.inputed);
    }
  }
};
</script>
