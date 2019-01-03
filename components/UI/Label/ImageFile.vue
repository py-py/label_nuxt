<template>
  <div class="mb-1">
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file..."
      accept="image/*"
      capture="camera"
    ></b-form-file>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null
    };
  },
  watch: {
    file: function() {
      this.$emit("imageFile", this.file);
    }
  }
};
</script>
