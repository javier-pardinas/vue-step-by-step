//This is the todos module:

export default {
    state: {
        todos: [
            { id: 1, text: 'Do This', done: true },
            { id: 2, text: 'Do That', done: false },
            { id: 3, text: 'Do Another Thing', done: true },
            { id: 4, text: 'Do The Other Thing', done: false }
        ],
    },
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
    mutations: {

    },
    actions: {

    },

}