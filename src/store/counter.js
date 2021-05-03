//This is the counter module:

export default {
    state: {
      count: 0,
    },
    getters: {
        getCount: state => state.count
    },
    mutations: {
      increment: (state, payload) => state.count+=payload.amount,
      decrement: (state, payload) => state.count-=payload.amount,
    },
    actions: {

    },

}
