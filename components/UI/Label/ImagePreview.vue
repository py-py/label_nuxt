<template>
  <div v-if="preview">
    <div>
      <img id="idPreview" :src="preview" >
    </div>
    <div>
      <vue-croppie v-if="preview" ref="croppieRef" :enableOrientation="true" @result="result" @update="update"></vue-croppie>
      <div class="d-flex justify-content-md-center">
        <v-button class="btn btn-info" @click="reset()">Reset</v-button>
        <v-button class="btn btn-info" @click="crop()">Crop</v-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      preview: null
    };
  },
  props: ["file"],
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
      // TODO: fix
      if (this.preview) {
        this.$emit("imagePreview", this.preview);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
