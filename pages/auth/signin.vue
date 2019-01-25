<template>
  <div class="container">
    <br>
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 800px;">
        <h4 class="card-title mt-3 text-center">Sign In</h4>
        <b-form @submit="onSubmit">
          <!-- Email address -->
          <b-input-group class="mb-2">
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-user"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input type="email" :value="email" placeholder="Email address" required></b-form-input>
          </b-input-group>
          <!-- Email address -->

          <!-- Create password -->
          <b-input-group  class="mb-2">
            <b-input-group-prepend>
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </b-input-group-prepend>
            <b-form-input type="password" :value="password" placeholder="Password" required></b-form-input>
          </b-input-group>
          <!-- Create password -->


          <!-- Submit -->
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </div>
          <!-- form-group// -->
          <p class="text-center">Do not have an account?

          </p>
        </b-form>
      </article>
    </div>
    <!-- card.// -->
  </div>
  <!--container end.//-->
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    onSubmit() {
      console.log("Send data...");
    },
  }
};
</script>


<style lang="scss" scoped>
</style>
