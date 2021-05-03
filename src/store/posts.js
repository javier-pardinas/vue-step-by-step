//This is the posts module:

export default {
    state: {
        //empty array filled with the data that we get from our api
        posts: []
    },
    getters: {
        getPosts: state => state.posts
    },
    mutations: {
    //set the posts array with the data that we get from the api using the action getPosts()
    SET_POSTS(state, posts) {
        state.posts = posts
    }
    },
    actions: {
    //fetch data from an api and set the posts array with the data by commiting the SET_POSTS() mutation
    fetchPosts({commit}) {
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
}