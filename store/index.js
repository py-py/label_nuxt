import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedKinds: [],
      loadedManufactures: [],
      hasPermisson: true,
    },
    mutations: {
      setKinds(state, kinds) {
        state.loadedKinds = kinds;
      },
      setManufactures(state, manufactures) {
        state.loadedManufactures = manufactures;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, {$axios}) {
        let dataManufactures = await $axios.get(process.env.manufactureUrl);
        let dataKinds = await $axios.get(process.env.kindUrl);

        vuexContext.commit('setManufactures', dataManufactures.data);
        vuexContext.commit('setKinds', dataKinds.data);
      },
      setKinds(vuexContext, kinds) {
        vuexContext.commit('setKinds', kinds);
      },
      setManufactures(vuexContext, manufactures) {
        vuexContext.commit('setManufactures', manufactures);
      },
    },
    getters: {
      loadedKinds(state) {
        return state.loadedKinds;
      },
      loadedManufactures(state) {
        return state.loadedManufactures;
      },
      hasPermission(state) {
        return state.hasPermisson;
      }
    }
  })
}

export default createStore
