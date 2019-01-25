<template>
  <section>
    <h4 class="text-center m-0">Last {{countLabels}} labels</h4>
    <div class="fluid-container mx-2 p-2">
      <div class="row">
        <LabelCard v-for="label in labels" :key="label.id" :label="label"/>
      </div>
    </div>
  </section>
</template>

<script>
import LabelCard from "~/components/Common/LabelCard.vue";

export default {
  components: {
    LabelCard
  },
  async asyncData({ $axios, error }) {
    try {
      let { data } = await $axios.get(process.env.labelUrl + "?last");
      return {
        labels: data.results
      };
    } catch (err) {
      error(err);
    }
  },
  computed: {
    countLabels: function() {
      return this.labels.length;
    }
  }
};
</script>
