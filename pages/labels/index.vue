<template>
  <section>
    <Labels :labels="loadedLabels"/>
    <Pagination :countAll="count" :countPage="countPage" :next="next" :prev="prev"/>
  </section>
</template>

<script>
import Labels from "~/components/Labels/Labels.vue";
import Pagination from "~/components/UI/Pagination.vue";

export default {
  components: {
    Labels,
    Pagination
  },
  async asyncData({ $axios, error }) {
    try {
      let labels = await $axios.get(process.env.labelUrl);
      return {
        loadedLabels: labels.data.results,
        count: labels.data.count,
        prev: labels.data.previous,
        next: labels.data.next
      };
    } catch (err) {
      error(err);
    }
  },
  computed: {
    countPage: function() {
      return Math.ceil(this.count / this.loadedLabels.length);
    }
  }
};
</script>
