<template>
  <div ref="containerRef">
    <div v-show="croppie">
      <div class="mb-1" ref="croppieRef"></div>
      <div class="d-flex justify-content-around mb-1">
        <b-button class="btn btn-info" @click="crop" :disabled="!Boolean(croppie)">Crop</b-button>
        <b-button class="btn btn-info" @click="show" :disabled="!Boolean(croppedImage)">Show</b-button>
      </div>
    </div>

    <b-modal ref="croppieModalRef" centered title="Preview Image" :body-class="'mx-auto'" :hide-footer="true">
      <img :src="croppedImage" style="width: 100%"/>
    </b-modal>
  </div>
</template>

<script>
import transformMixin from "~/mixins/transformFile.js";
import uuidMixin from "~/mixins/generateUuid.js";


export default {
  mixins: [
    transformMixin,
    uuidMixin,
  ],
  data() {
    return {
      croppedImage: null,
      croppie: null
    };
  },
  props: [
    "file",
  ],
  methods: {
    handleFileImage: function(fileImage) {
      if (this.croppie) this.croppie.destroy();

      let el = this.$refs.croppieRef;
      let size = this.$refs.containerRef.getBoundingClientRect().width;

      this.croppie = new Croppie(el, {
        viewport: { width: size - 100, height: size - 100 },
        boundary: { width: size, height: size },
        showZoomer: false,
        enableOrientation: true
      });
      this.croppie.bind({
        url: fileImage
      });
    },
    crop: async function() {
      this.croppedImage = await this.croppie.result({
        size: "original",
      })
    },
    show: function() {
      this.$refs.croppieModalRef.show();
    }
  },
  watch: {
    file: async function(val) {
      let reader = new FileReader();
      let vueInstance = this;
      reader.onload = function() {
        vueInstance.handleFileImage(reader.result);
      };
      reader.readAsDataURL(val);
    },
    croppedImage: function(val) {
      let fileObj = this.convertBase64ToFile(val, name=this.generateUUID())
      this.$emit("imagePreview", fileObj);
    }
  }
};
</script>
