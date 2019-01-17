<template>
  <section>
    <div class="fluid-container mx-2 p-2">
      <div class="row">
        <LabelCard v-for="label in loadedLabels" :key="label.id" :label="label"/>
      </div>
    </div>
    <Pagination :countAll="count" :countPage="countPage" :next="next" :prev="prev"/>
  </section>
</template>


<script>
import LabelCard from "~/components/Labels/LabelCard.vue";
import Pagination from "~/components/UI/Pagination.vue";

export default {
  components: {
    LabelCard,
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

<style lang="scss" scoped>
.labels-list {
  margin-top: 20px;
}
</style>

