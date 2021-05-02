//A "store" is basically a container that holds your application state.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //data:
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'Do This', done: true },
      { id: 2, text: 'Do That', done: false },
      { id: 3, text: 'Do Another Thing', done: true },
      { id: 4, text: 'Do The Other Thing', done: false }
    ]
  },
  //getters are like computed properties for stores. they allow us to access an specific data.
  //Like computed properties, a getter's result is cached based on its dependencies, 
  //and will only re-evaluate when some of its dependencies have changed.
  getters: {
    //todos with done: true
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    //number of todos with done:true
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    //get todo by id:
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  //modify the state:
  mutations: {
    increment: (state, payload) => state.count+=payload.amount,
    decrement: (state, payload) => state.count-=payload.amount
  },

  actions: {
  },
  modules: {
  }
})
