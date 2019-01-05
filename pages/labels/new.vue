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
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.css' },
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.2/croppie.js' },
      ]
    };
  },
  components: {
    LabelNew
  }
};
</script>
