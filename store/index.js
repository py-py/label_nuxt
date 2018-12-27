import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedLabels: []
    },
    mutations: {
      setLabels(state, labels) {
        state.loadedLabels = labels;
      }
    },
    actions: {
      setLabels(vuexContext, labels) {
        vuexContext.commit('setLabels', labels);
      },
    },
    getters: {
      loadedLabels(state) {
        return state.loadedLabels;
      }
    }
  })
}

export default createStore
