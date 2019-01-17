<template>
  <section>
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
          <Rating :labelRating="label.rating" :isActive="true" v-on:set-rating="setNewRating" />
          <Seen :seen="label.seen"/>
          <h4 class="my-3">Details</h4>

          <div class="row">
            <div class="col">
              <b>Manufacturer:</b>
            </div>
            <div class="col">{{getManufactureName(label.manufacture)}}</div>
          </div>
          <div class="row">
            <div class="col">
              <b>Kind:</b>
            </div>
            <div class="col">{{getKindName(label.kind)}}</div>
          </div>
          <div class="row">
            <div class="col">
              <b>Added:</b>
            </div>
            <div class="col">{{getLocalDatetime(label.added_ts)}}</div>
          </div>
          <div class="row">
            <div class="col">
              <b>Updated:</b>
            </div>
            <div class="col">{{getLocalDatetime(label.updated_ts)}}</div>
          </div>
        </div>
      </div>
      <!-- /.row -->
      <!-- Related Projects Row -->
      <LabelRelated :relatedLabels="relatedLabels"/>
      <!-- /.row -->
    </div>
  </section>
</template>

<script>
import LabelRelated from "~/components/Labels/LabelRelated";
import Rating from "~/components/UI/Rating";
import Seen from "~/components/UI/Seen";
import commonMixin from "~/mixins/common.js";

export default {
  mixins: [commonMixin],
  components: {
    LabelRelated,
    Rating,
    Seen
  },
  async asyncData({ $axios, params, error }) {
    try {
      let label = await $axios.get(process.env.labelUrl + params.id);
      let relatedLabels = await $axios.get(
        process.env.relatedLabelUrl + params.id
      );
      return {
        label: label.data,
        relatedLabels: relatedLabels.data
      };
    } catch (err) {
      error(err);
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  methods: {
    setNewRating: async function(value) {
      // TODO: continue
      console.log('sending a new value of rating')
      // await this.$axios.patch(this.process.env.labelUrl + params.id)
      // TODO: send Updated Rating;
    }
  }
};
</script>
