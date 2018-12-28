<template>
  <section>
    <LabelDetails :label="label"/>
  </section>
</template>


<script>
import LabelDetails from "~/components/Labels/LabelDetails.vue";
import Axios from 'axios';

export default {
  components: {
    LabelDetails
  },
  async asyncData(context) {
    let data = await Axios.get('http://127.0.0.1:8000/api/labels/' + context.params.id);
    return {
      label: data.data
    }
  },
  validate ({params}) {
    return /^\d+$/.test(params.id)
  }
};
</script>
