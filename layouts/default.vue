<template>
  <div class="main">
    <Header/>
    <section class="main-section py-1">
      <nuxt/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

</style>


<script>
import Header from "~/components/Shared/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
