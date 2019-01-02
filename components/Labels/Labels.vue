<template>
  <div class="fluid-container mx-2 p-2">
    <div class="row">
    <LabelCard
      v-for="label in labels"
      :key="label.id"
      :label="label"
    />
    </div>
  </div>
</template>

<script>
import LabelCard from "~/components/Labels/LabelCard.vue";

export default {
  components: {
    LabelCard,
  },
  props: {
    labels: {
      type: Array,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.labels-list {
  margin-top: 20px;
}
</style>
