import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedKinds: [],
      loadedManufacturs: [],
    },
    mutations: {
      setKinds(state, kinds) {
        state.loadedKinds = kinds;
      }
    },
    actions: {
      setKinds(vuexContext, kinds) {
        vuexContext.commit('setKinds', kinds);
      },
    },
    getters: {
      loadedKinds(state) {
        return state.loadedKinds;
      }
    }
  })
}

export default createStore
