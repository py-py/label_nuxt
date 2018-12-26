<template>
  <section>
    <Labels :labels="labels"/>
    <Pagination/>
  </section>
</template>

<script>
import Labels from "~/components/Labels/Labels.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Labels,
    Pagination
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        labels: [
          {
            id: 1,
            title: "Project #1",
            imageUrl: "http://placehold.it/700x400",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
          },
          {
            id: 2,
            title: "Project #2",
            imageUrl: "http://placehold.it/700x400",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
          },
          {
            id: 3,
            title: "Project #3",
            imageUrl: "http://placehold.it/700x400",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
          },
          {
            id: 4,
            title: "Project #4",
            imageUrl: "http://placehold.it/700x400",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
          },
          {
            id: 5,
            title: "Project #5",
            imageUrl: "http://placehold.it/700x400",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"
          }
        ]
      });
    }, 500);
  },
};
</script>

<style>
.portfolio-item {
  margin-bottom: 20px;
}
</style>
