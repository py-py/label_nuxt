<template>
  <div class="relatedLabels">
    <h3 class="my-4">Related Projects</h3>
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4" v-for="label in relatedLabels" :key="label.id">
        <nuxt-link :to="/labels/ + label.id">
          <img class="img-fluid" :src=label.image_url alt>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    relatedLabels: {
      type: Array,
      required: true,
    }
  }
}
</script>
