const manufactureModule = {
  state: {
    loadedManufactures: [],
  },
  mutations: {
    setManufactures(state, manufactures) {
      state.loadedManufactures = manufactures;
    },
    addManufacture(state, manufacture) {
      state.loadedManufactures.push(manufacture);
    },
  },
  actions: {
    async nuxtServerInit(vuexContext, { $axios, error }) {
      try {
        let dataManufactures = await $axios.get(process.env.manufactureUrl);
        vuexContext.commit('setManufactures', dataManufactures.data);
      } catch (err) {
        error(err)
      }
    },
    setManufactures(vuexContext, manufactures) {
      vuexContext.commit('setManufactures', manufactures);
    },
    addManufacture(vuexContext, manufacture) {
      vuexContext.commit('addManufacture', manufacture);
    },
  },
  getters: {
    loadedManufactures(state) {
      return state.loadedManufactures;
    },
  }
}

export default manufactureModule