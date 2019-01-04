<template>
  <div class="mb-1">
    <b-input-group>
      <b-form-select v-model="selected" :state="Boolean(selected)" :options="options"/>
      <b-input-group-append v-if="hasPermission">
        <b-btn variant="success" @click="showModalKind">Add</b-btn>
      </b-input-group-append>
    </b-input-group>

    <b-modal ref="kindModalRef" @ok="addKind" centered title="Let's add a new kind" v-if="hasPermission">
      <b-input v-model="nameNewKind" placeholder="Enter a new name of kind"/>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      nameNewKind: null,
    };
  },
  computed: {
    options: function() {
      let result = [
        {
          value: null,
          text: "Select a kind"
        }
      ];
      for (let kind of this.$store.getters.loadedKinds) {
        result.push({
          value: kind.id,
          text: kind.name
        });
      }
      return result;
    },
    hasPermission: function() {
      return this.$store.getters.hasPermission;
    }
  },
  methods: {
    showModalKind() {
      this.$refs.kindModalRef.show();
    },
    async addKind() {
      // TODO: continue
      try {
        let kind = await this.$axios.post(process.env.kindUrl, {name: this.nameNewKind})
      } catch (err) {
        this.error(err);
      }
    },
  },
  watch: {
    selected: function() {
      this.$emit("selectedKind", this.selected);
    }
  }
};
</script>
