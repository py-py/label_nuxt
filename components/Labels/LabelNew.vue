<template>
  <form method="post" class="container-fluid">
    <div class="row">
      <div class="col-sm pb-1">
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file..."
          accept="image/*"
          capture="camera"
        ></b-form-file>
      </div>
      <div class="col-sm pb-1">
        <img :src="imgPreviewUrl" v-if="imgPreviewUrl" alt="previewImg">
      </div>
    </div>
    <div class="row">
      <div class="btn btn-success m-auto">Post Label</div>
    </div>
  </form>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      file: null,
      imgPreviewUrl: null,

      newLabel: {
        name: null,
        rating: null,
        kind: null,
        manufacturer: null,
        year: null
      }
    };
  },
  watch: {
    file: function(val) {
      let reader = new FileReader();
      let currentVueObj = this;
      reader.onload = function(e) {
        currentVueObj.imgPreviewUrl = reader.result;
      };
      reader.readAsDataURL(val);
    }
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>

