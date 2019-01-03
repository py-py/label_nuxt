<template>
  <div class="mb-1">
    <b-form-input v-model="inputed" :state="Boolean(inputed)" placeholder="Enter a name of label"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputed: null,
    }
  },
  watch: {
    inputed: function() {
      if (this.inputed) this.$emit('nameLabel', this.inputed);
    }
  }
}
</script>
