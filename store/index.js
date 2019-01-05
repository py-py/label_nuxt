import Vuex from 'vuex';
import kindModule from '~/store/kind'
import manufactureModule from '~/store/manufacture'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      kindModule,
      manufactureModule,
    },
    state: {
      hasPermisson: true,
    },
    getters: {
      hasPermission(state) {
        return state.hasPermisson;
      }
    }
  })
}

export default createStore
