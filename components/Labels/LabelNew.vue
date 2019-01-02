<template>
  <div class="container">
      <div class="col-xs-6">
        <form id="labelForm">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required>
            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
          </div>
          <button type="submit" class="btn btn-primary mt-1">Submit</button>
        </form>
      </div>
      <div class="col-xs-6">
        <!-- <img id="image" src="picture.jpg"> -->
      </div>
    </div>
</template>

<script>
// import Cropper from "cropperjs";

export default {
  // mounted: function() {
  //   const image = document.getElementById("image");
  //   const cropper = new Cropper(image, {
  //     aspectRatio: 16 / 9,
  //     crop(event) {
  //       console.log(event.detail.x);
  //       console.log(event.detail.y);
  //       console.log(event.detail.width);
  //       console.log(event.detail.height);
  //       console.log(event.detail.rotate);
  //       console.log(event.detail.scaleX);
  //       console.log(event.detail.scaleY);
  //     }
  //   });
  // }
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>

