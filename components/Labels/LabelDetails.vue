<template>
  <div class="container py-1">
    <!-- Portfolio Item Heading -->
    <h1 class="my-4 text-center">{{label.name}}</h1>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-6">
        <img class="img-fluid" :src="label.image_url" alt>
      </div>

      <div class="col-md-6">
        <h4 class="product-title my-3">{{label.name}}</h4>
        <Rating :seen="label.seen"/>
        <h4 class="my-3">Details</h4>

        <div class="row">
          <div class="col"><b>Manufacturer:</b></div>
          <div class="col">{{getManufactureName(label.manufacture)}}</div>
        </div>
        <div class="row">
          <div class="col"><b>Kind:</b></div>
          <div class="col">{{getKindName(label.kind)}}</div>
        </div>
        <div class="row">
          <div class="col"><b>Added:</b></div>
          <div class="col">{{getLocalDatetime(label.added_ts)}}</div>
        </div>
        <div class="row">
          <div class="col"><b>Updated:</b></div>
          <div class="col">{{getLocalDatetime(label.updated_ts)}}</div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">Related Projects</h3>
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4" v-for="item in relatedLabels" :key="item.id">
        <nuxt-link :to="/labels/ + item.id">
          <img class="img-fluid" :src=item.image_url alt>
        </nuxt-link>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import Rating from "~/components/UI/Rating";
import commonMixin from "~/mixins/common.js"

export default {
  mixins: [
    commonMixin,
  ],
  components: {
    Rating
  },
  props: {
    label: {
      type: Object,
      required: true
    },
    relatedLabels: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.checked {
  color: #25c54f;
}
</style>
