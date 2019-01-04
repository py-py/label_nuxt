<template>
  <div>
    <div class="d-flex justify-content-center align-items-center centered">
      <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">{{error.statusCode}}</h1>
      <div class="inline-block align-middle">
        <h2 class="font-weight-normal lead" id="desc">{{errorDescription}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorDescription: null,
    }
  },
  props: ["error"],
  mounted: function() {
    let errorsDescription = {
      404: 'The page you requested was not found.',
      default: 'Somethins goes wrong.',
    }
    if (errorsDescription.hasOwnProperty(this.error.statusCode)) {
      this.errorDescription = errorsDescription[this.error.statusCode]
    }
    else {
      this.errorDescription = errorsDescription.default;
    }
  }
};
</script>

<style lang="scss" scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>

