//A "store" is basically a container that holds your application state.

import Vue from 'vue'
import Vuex from 'vuex'

//modules:
import counter from "./counter";

Vue.use(Vuex)

export default new Vuex.Store({
  //data:
  state: {
    todos: [
      { id: 1, text: 'Do This', done: true },
      { id: 2, text: 'Do That', done: false },
      { id: 3, text: 'Do Another Thing', done: true },
      { id: 4, text: 'Do The Other Thing', done: false }
    ],
    //empty array filled with the data that we get from our api
    posts: []
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
    //set the posts array with the data that we get from the api using the action getPosts()
    SET_POSTS(state, posts) {
      state.posts = posts
      }
  },

  //actions for fetching and validating data:
  actions: {
    //fetch data from an api and set the posts array with the data by commiting the SET_POSTS() mutation
    getPosts({commit}) {
      // GET request using fetch with error handling
      fetch('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(async response => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        commit('SET_POSTS', data)
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
    }
  },
  //we divide our store in modules. By just importing and adding it here, we have access 
  //to everything inside this module. Each module can contain its own state, 
  //mutations, actions, getters, and even nested modules 
  modules: {
    counter
  }
})
