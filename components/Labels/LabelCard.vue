<template>
  <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
    <div class="card">
      <nuxt-link :to="/labels/+label.id">
        <img class="card-img-top" :src="label.image_url" alt>
      </nuxt-link>
      <div class="card-body">
        <h4 class="card-title">
          <nuxt-link :to="/labels/+label.id">{{label.name}}</nuxt-link>
        </h4>
        <div class="card-details">
          <div class="row">
            <div class="col-6 pr-1">Производитель:</div>
            <div class="col-6">{{manufactoryName}}</div>
          </div>
          <div class="row">
            <div class="col-6 pr-1">Сорт:</div>
            <div class="col-6">{{kindName}}</div>
          </div>
        </div>
      </div>

      <div class="card-footer text-muted card-details">
        Added: {{ getMomentFromNow(label.added_dt) }}
      </div>
    </div>
  </div>
</template>

<script>
import Moment from 'moment';

export default {
  props: {
    label: {
      type: Object,
      required: true
    }
  },
  methods: {
    getMomentFromNow: function(ts) {
      return Moment(ts).fromNow();
    },
  },
  computed: {
    kindName() {
      let kind = this.$store.getters.loadedKinds.find(element=>element.id === this.label.kind);
      return kind.name;
    },
    manufactoryName() {
      let manufactory = this.$store.getters.loadedManufactories.find(element=>element.id === this.label.manufactory);
      return manufactory.name;
    },
  }

};
</script>

<style lang="scss" scoped>
.portfolio-item {
  margin-bottom: 10px;
}
.card-details {
  font-size: 12px;
}
</style>
