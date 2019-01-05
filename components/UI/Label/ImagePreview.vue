<template>
  <div class="previewContainer" ref="previewContainer">
    <!-- <div>
      <img :src="previewImage">
    </div>-->
    <div v-show="previewImage">
      <div class="croppieImage mb-1" ref="croppieImage"></div>
      <div class="d-flex justify-content-around mb-1">
        <b-button class="btn btn-info" @click="reset">Reset</b-button>
        <b-button class="btn btn-info" @click="crop">Crop</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
      croppedImage: null,
      croppie: null
    };
  },
  props: ["file"],
  methods: {
    handleImage: function(image) {
      let el = this.$refs.croppieImage;
      let size = this.$refs.previewContainer.getBoundingClientRect();

      this.croppie = new Croppie(el, {
        viewport: { width: size.width - 100, height: size.width - 100 },
        boundary: { width: size.width, height: size.width },
        showZoomer: false,
        enableOrientation: true
      });
      this.croppie.bind({
        url: image
      });
    },
    reset: function() {},
    crop: function() {}
  },
  watch: {
    file: async function(val) {
      let reader = new FileReader();

      let vueInstance = this;
      reader.onload = function() {
        let image = reader.result;
        vueInstance.handleImage(image);
        // previous variant;
        vueInstance.previewImage = image;
      };
      reader.readAsDataURL(val);
    },
    previewImage: async function(val) {
      // TODO: previes after cropping;
      this.$emit("imagePreview", this.previewImage);
    }
  }
};
</script>

<style lang="scss" scoped>
.previewContainer {
  img {
  }
  .croppieImage {
  }
}
</style>
