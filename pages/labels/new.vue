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
      ],
      script: [
        // { src: "https://unpkg.com/vue-croppie/dist/vue-croppie.js" },
      ]
    };
  },
  components: {
    LabelNew
  }
};
</script>
