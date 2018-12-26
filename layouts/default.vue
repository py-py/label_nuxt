<template>
  <div>
    <Header/>
    <section class="main">
      <nuxt/>
    </section>
    <Footer/>
  </div>
</template>

<style>
html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.main {
  margin-top: 56px;
}
</style>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  }
};
</script>
