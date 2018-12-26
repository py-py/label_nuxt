<template>
  <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <a href="#">
        <img class="card-img-top" :src="label.imageUrl" alt>
      </a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{label.title}}</a>
        </h4>
        <p class="card-text">
          {{label.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelCard",
  props: {
    label: {
      type: Object,
      required: true
    },
  }
}
</script>
