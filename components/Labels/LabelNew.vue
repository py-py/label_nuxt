<template>
  <form method="post" class="container">
    <div class="row mb-1">
      <div class="col-md">
        <ImageFile v-on:imageFile="imageFile=$event"/>
        <NameInput v-on:nameLabel="nameLabel=$event"/>
        <ManufactureSelect v-on:selectedManufacture="selectedManufactureLabel=$event"/>
        <KindSelect v-on:selectedKind="selectedKindLabel=$event"/>
        <YearInput v-on:yearLabel="yearLabel=$event"/>
      </div>
      <div class="col-md">
        <ImagePreview :file="imageFile" :name="nameLabel" v-on:imagePreview="imagePreview=$event"/>
      </div>
    </div>
    <div class="row">
      <b-button class="btn btn-success m-auto" :disabled="!isActive" @click="postLabel">Post Label</b-button>
    </div>
  </form>
</template>

<script>
import ImageFile from "~/components/UI/Label/ImageFile";
import ManufactureSelect from "~/components/UI/Label/ManufactureSelect";
import KindSelect from "~/components/UI/Label/KindSelect";
import YearInput from "~/components/UI/Label/YearInput";
import NameInput from "~/components/UI/Label/NameInput";

import ImagePreview from "~/components/UI/Label/ImagePreview";

export default {
  components: {
    ImageFile,
    ImagePreview,
    NameInput,
    ManufactureSelect,
    KindSelect,
    YearInput
  },
  data() {
    return {
      imageFile: null,
      imagePreview: null,

      nameLabel: null,
      selectedKindLabel: null,
      selectedManufactureLabel: null,
      yearLabel: null,
      ratingLabel: null
    };
  },
  computed: {
    isActive: function() {
      return (
        this.imagePreview &&
        this.nameLabel &&
        this.selectedManufactureLabel &&
        this.selectedKindLabel &&
        this.yearLabel
      );
    }
  },
  methods: {
    postLabel: async function() {
      // TODO: disable button, show spinner;
      try {
        let dataLabel = {
          name: this.nameLabel,
          year: this.yearLabel,
          kind: this.selectedKindLabel,
          manufacture: this.selectedManufactureLabel
        };
        let label = await this.$axios.post(process.env.labelUrl, dataLabel);

        let dataImage = new FormData();
        dataImage.set("label", label.data.id);
        dataImage.set("image", this.imagePreview);

        let image = await this.$axios.post(process.env.imageUrl, dataImage, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.$router.push("/labels/");
      } catch (err) {
        this.error(err);
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

