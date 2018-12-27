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
  asyncData({app}) {
    app.$axios
    .get('http://127.0.0.1:8000/api/labels/')
    .then((data)=> {
      let loadedLabels = data.results;
      console.log(data);
    })
  },
};
</script>

<style lang="sass" scoped>

</style>
