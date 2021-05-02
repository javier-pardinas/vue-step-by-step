//A "store" is basically a container that holds your application state.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //data:
  state: {
    count: 0
  },
  //modify the state:
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
