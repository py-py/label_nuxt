<template>
  <section>
    <h4 class="text-center">Последние поступления:</h4>
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
    let data = await Axios.get("http://127.0.0.1:8000/api/labels/?last");
    return {
      loadedLabels: data.data.results
    }
  },
};
</script>

<style lang="sass" scoped>

</style>
