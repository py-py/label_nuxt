<template>
  <div class="mb-1">
    <b-input-group>
      <b-form-select v-model="selected" :state="Boolean(selected)" :options="options"/>
      <b-input-group-append v-if="hasPermission">
        <b-btn variant="success" @click="showModalManufacture">Add</b-btn>
      </b-input-group-append>
    </b-input-group>

    <b-modal ref="manufactureModalRef" @ok="addManufacture" centered title="Let's add a new manufacture" v-if="hasPermission">
      <b-input v-model="nameNewManufacture" placeholder="Enter a new name of manufacture"/>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      nameNewManufacture: null,
    }
  },
  computed: {
    options: function() {
      let result = [{
        value: null,
        text: 'Select a manufacture'
      }]
      for (let manufacture of this.$store.getters.loadedManufactures) {
        result.push({
          value: manufacture.id,
          text: manufacture.name
        })
      }
      return result
    },
    hasPermission: function() {
      return this.$store.getters.hasPermission;
    }
  },
  methods: {
    showModalManufacture() {
      this.$refs.manufactureModalRef.show();
    },
    async addManufacture() {
      // TODO: continue
      // let manufacture = await this.$axios.post(proccess.env.manufactureUrl, {name: this.nameNewManufacture})
    },
  },
  watch: {
    selected: function() {
      this.$emit('selectedManufacture', this.selected);
    }
  }
}
</script>
