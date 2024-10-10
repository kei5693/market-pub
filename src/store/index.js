import { createStore } from 'vuex'

export default createStore({
  state: {
    currentNav: 0,
  },
  getters: {
  },
  mutations: {
    navEvent: (payload) => {
      // state.currentNav = payload;

      console.log(payload);
    },
  },
  actions: {
  },
  modules: {
  }
})
