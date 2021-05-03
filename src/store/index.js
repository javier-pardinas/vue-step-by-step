//A "store" is basically a container that holds your application state.

import Vue from 'vue'
import Vuex from 'vuex'

//modules:
import counter from "./counter";
import posts from "./posts";
import todos from "./todos"

Vue.use(Vuex)

export default new Vuex.Store({
  //data:
  state: {

  },
  //getters are like computed properties for stores. they allow us to access an specific data.
  //Like computed properties, a getter's result is cached based on its dependencies, 
  //and will only re-evaluate when some of its dependencies have changed.
  getters: {

  },
  //modify the state:
  mutations: {

  },

  //actions for fetching and validating data:
  actions: {

  },
  //we divide our store in modules. By just importing and adding it here, we have access 
  //to everything inside this module. Each module can contain its own state, 
  //mutations, actions, getters, and even nested modules 
  modules: {
    counter,
    posts,
    todos
  }
})
