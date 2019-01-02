<template>
  <section>
    <LabelNew/>
  </section>
</template>

<script>
import LabelNew from "~/components/Labels/LabelNew";

export default {
  head() {
    return {
      link: [
        // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.3/cropper.min.css'},
        // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.min.css'},
      ],
      script: [
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.3/cropper.min.js'},
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.min.js'},
        { src: "https://unpkg.com/vue-croppie/dist/vue-croppie.js" },
      ]
    };
  },
  components: {
    LabelNew
  }
};
</script>
