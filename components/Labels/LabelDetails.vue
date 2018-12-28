<template>
  <div class="container my-2">
    <!-- Portfolio Item Heading -->
    <h1 class="my-4 text-center">{{label.name}}</h1>

    <!-- Portfolio Item Row -->
    <div class="row">
      <div class="col-md-6">
        <img class="img-fluid" :src="label.image_url" alt>
      </div>

      <div class="col-md-6">
        <h4 class="product-title my-3">{{label.name}}</h4>
        <div class="row">
          <div class="rating col">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<small class="review-no">{{label.seen}} reviews</small>
						</div>
        </div>
        <h4 class="my-3">Details</h4>

        <div class="row">
          <div class="col"><b>Manufacturer:</b></div>
          <div class="col">Рогань</div>
        </div>
        <div class="row">
          <div class="col"><b>Kind:</b></div>
          <div class="col">Белое</div>
        </div>
        <div class="row">
          <div class="col"><b>Added:</b></div>
          <div class="col">{{addedDatetime}}</div>
        </div>
        <div class="row">
          <div class="col"><b>Updated:</b></div>
          <div class="col">{{updatedDatetime}}</div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Related Projects Row -->
    <h3 class="my-4">Related Projects</h3>
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt>
        </a>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt>
        </a>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt>
        </a>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <img class="img-fluid" src="http://placehold.it/500x300" alt>
        </a>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: Object,
      required: true
    }
  },
  computed: {
    addedDatetime: function() {
      let date = new Date(this.label.added_dt)
      return date.toDateString()
    },
    updatedDatetime: function() {
      let date = new Date(this.label.updated_dt)
      return date.toDateString()
    },
  }
};
</script>

<style lang="scss" scoped>
.checked {
  color: #25c54f;
}
</style>
