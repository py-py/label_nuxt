import Vuex from 'vuex';
import Axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedKinds: [],
      loadedManufactories: [],
    },
    mutations: {
      setKinds(state, kinds) {
        state.loadedKinds = kinds;
      },
      setManufactories(state, manufactories) {
        state.loadedManufactories = manufactories;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        let dataManufactories = await Axios.get(' http://127.0.0.1:8000/api/manufactories/');
        let dataKinds = await Axios.get(' http://127.0.0.1:8000/api/kinds/');

        vuexContext.commit('setManufactories', dataManufactories.data);
        vuexContext.commit('setKinds', dataKinds.data);
      },
      setKinds(vuexContext, kinds) {
        vuexContext.commit('setKinds', kinds);
      },
      setManufactories(vuexContext, manufactories) {
        vuexContext.commit('setManufactories', manufactories);
      },
    },
    getters: {
      loadedKinds(state) {
        return state.loadedKinds;
      },
      loadedManufactories(state) {
        return state.loadedManufactories;
      }
    }
  })
}

export default createStore
