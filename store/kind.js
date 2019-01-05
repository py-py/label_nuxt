const kindModule = {
  state: {
    loadedKinds: [],
  },
  mutations: {
    setKinds(state, kinds) {
      state.loadedKinds = kinds;
    },
    addKind(state, kind) {
      state.loadedKinds.push(kind);
    },
  },
  actions: {
    async nuxtServerInit(vuexContext, { $axios, error }) {
      try {
        let dataKinds = await $axios.get(process.env.kindUrl);
        vuexContext.commit('setKinds', dataKinds.data);
      } catch (err) {
        error(err)
      }
    },
    setKinds(vuexContext, kinds) {
      vuexContext.commit('setKinds', kinds);
    },
    addKind(vuexContext, kind) {
      vuexContext.commit('addKind', kind);
    },
    
  },
  getters: {
    loadedKinds(state) {
      return state.loadedKinds;
    },
  }
}

export default kindModule