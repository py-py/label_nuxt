<template>
  <section>
    <LabelDetails :label="label" :relatedLabels="relatedLabels"/>
  </section>
</template>


<script>
import LabelDetails from "~/components/Labels/LabelDetails.vue";

export default {
  components: {
    LabelDetails
  },
  async asyncData({ $axios, params }) {
    let label = await $axios.get(process.env.labelUrl + params.id);
    let relatedLabels = await $axios.get(process.env.relatedLabelUrl + params.id);

    return {
      label: label.data,
      relatedLabels: relatedLabels.data,
    }
  },
  validate ({params}) {
    return /^\d+$/.test(params.id)
  },
};
</script>
