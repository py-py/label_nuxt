<template>
  <section>
    <h4 class="text-center m-0">Last {{countLabels}} labels</h4>
    <Labels :labels="loadedLabels"/>
  </section>
</template>

<script>
import Labels from "~/components/Labels/Labels.vue";

export default {
  components: {
    Labels
  },
  async asyncData({ $axios, error }) {
    try {
      let labelsData = await $axios.get(process.env.labelUrl + "?last");
      return {
        loadedLabels: labelsData.data.results
      };
    } catch (err) {
      error(err);
    }
  },
  computed: {
    countLabels: function() {
      return this.loadedLabels.length;
    }
  }
};
</script>
