<template>
  <section>
    <h4 class="text-center m-0">Last {{countLabels}} labels</h4>
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
    let labelsData = await Axios.get(process.env.labelUrl + '?last');
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
