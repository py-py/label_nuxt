<template>
  <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <nuxt-link :to="/labels/+label.id">
        <img class="card-img-top" :src="label.image_url" alt>
      </nuxt-link>
      <div class="card-body">
        <h4 class="card-title">
          <nuxt-link :to="/labels/+label.id">{{label.name}}</nuxt-link>
        </h4>
        <div class="card-details">
        <div class="row">
          <div class="col-6">Производитель:</div>
          <div class="col-6">{{label.name}}</div>
        </div>
        <div class="row">
          <div class="col-6">Сорт:</div>
          <div class="col-6">{{label.name}}</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-item {
  margin-bottom: 20px;
}
.card-details {
  font-size: 12px;
}
</style>

