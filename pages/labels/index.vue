<template>
  <section>
    <Labels :labels="loadedLabels"/>
    <Pagination
     :countAll="count"
     :countPage="countPage"
     :next="next"
     :prev="prev"
    />
  </section>
</template>

<script>
import Labels from "~/components/Labels/Labels.vue";
import Pagination from "~/components/Pagination.vue";
import Axios from "axios";

export default {
  components: {
    Labels,
    Pagination
  },
  async asyncData(context) {
    let data = await Axios.get("http://127.0.0.1:8000/api/labels/");
    return {
      loadedLabels: data.data.results,
      count: data.data.count,
      prev: data.data.previous,
      next: data.data.next,
    }
  },
  computed: {
    countPage: function() {
      return Math.ceil(this.count / this.loadedLabels.length);
    }
  }
};
</script>
