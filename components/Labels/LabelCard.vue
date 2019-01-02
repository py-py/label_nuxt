<template>
  <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title mb-0">
          <nuxt-link :to="/labels/+label.id">{{label.name}}</nuxt-link>
        </h6>
      </div>
      <nuxt-link :to="/labels/+label.id">
        <img class="card-label" :src="label.image_url" alt>
      </nuxt-link>
      <div class="card-body">
        <div class="card-details">
          <div class="row">
            <div class="col-6 pr-1">Производитель:</div>
            <div class="col-6">{{getManufactureName(label.manufacture)}}</div>
          </div>
          <div class="row">
            <div class="col-6 pr-1">Сорт:</div>
            <div class="col-6">{{getKindName(label.kind)}}</div>
          </div>
        </div>
      </div>

      <div class="card-footer text-muted card-details">Added: {{ getMomentFromNow(label.added_dt) }}</div>
    </div>
  </div>
</template>

<script>
import commonMixin from "~/mixins/common.js";

export default {
  mixins: [commonMixin],
  props: {
    label: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-item {
  margin-bottom: 10px;
  .card-label {
    width: 100%;
  }
}
.card-details {
  font-size: 12px;
}
</style>
