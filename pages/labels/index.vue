<template>
  <section>
    <Labels :labels="loadedLabels"/>
    <Pagination/>
  </section>
</template>

<script>
import Labels from "~/components/Labels/Labels.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Labels,
    Pagination
  },
  asyncData({app}) {
    app.$axios
    .get('http://127.0.0.1:8000/api/labels/')
    .then((data)=> {
      let loadedLabels = data.results;
      console.log(data);
    })
    .catch(e => console.log(e))
  },
};
</script>
