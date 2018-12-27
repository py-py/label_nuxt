<template>
  <section>
    <LabelDetails :label="label"/>
  </section>
</template>


<script>
import LabelDetails from "~/components/Labels/LabelDetails.vue";

export default {
  components: {
    LabelDetails
  },
  asyncData(context, callback) {
    console.log(context);
    callback(null, {
      label: {
        id: 1,
        title: "Project " + context.params.id,
        imageUrl: "http://placehold.it/700x400",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
      }
    });
  },
};
</script>
