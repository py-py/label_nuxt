<template>
  <section>
    <h1 class="text-center pt-2">Last {{countLabels}} labels</h1>
    <Labels :labels="loadedLabels"/>
  </section>
</template>

<script>
import Labels from "~/components/Labels/Labels.vue";
import Axios from "axios";

export default {
  components: {
    Labels
  },
  async asyncData(context) {
    let labelsData = await Axios.get("http://127.0.0.1:8000/api/labels/?last");
    return {
      loadedLabels: labelsData.data.results
    }
  },
  computed: {
    countLabels: function() {
      return this.loadedLabels.length;
    }
  }
};
</script>
