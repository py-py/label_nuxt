<template>
  <div>
    <img :src="preview" v-if="preview">
  </div>
</template>

<script>
export default {
  data() {
    return {
      preview: null
    };
  },
  props: ['file'],
  watch: {
    file: function(val) {
      let reader = new FileReader();

      let vueInstance = this;
      reader.onload = function() {
        vueInstance.preview = reader.result;
      };

      reader.readAsDataURL(this.file);
    },
    preview: function(val) {
      if (this.preview) this.$emit('imagePreview', this.preview)
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
