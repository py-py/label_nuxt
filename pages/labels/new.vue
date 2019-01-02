<template>
  <section>
    <LabelNew />
  </section>
</template>

<script>
import LabelNew from '~/components/Labels/LabelNew'

export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.3/cropper.min.css'}
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.3/cropper.min.js'},
      ]
    };
  },
  components: {
    LabelNew,
  },
};
</script>
