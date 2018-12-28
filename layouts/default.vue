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
import Axios from 'axios';

export default {
  components: {
    Header,
    Footer,
  },
  async asyncData(context) {
    console.log(context);
    let manufactures = await Axios.get(' http://127.0.0.1:8000/api/manufactories/');
    let kinds = await Axios.get(' http://127.0.0.1:8000/api/kinds/');
    return {
      manufactures: manufactures.data,
      kinds: kinds.data,
    }
  }
};
</script>
