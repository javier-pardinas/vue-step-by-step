<!--Parent Component of TodoItemExample-->
<template>
 <div class="todo-list-example">
 <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
    <TodoItemExample
    v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"/>
 </div>
</template>
 
<script>
import TodoItemExample from "@/components/TodoItemExample.vue";

export default {
  name:'TodoListExample',
  components: {
    TodoItemExample
  },
  data() {
      return {
        newTodoText: '',
        todos: [
            {
            id: 1,
            title: 'Do the dishes',
            },
            {
            id: 2,
            title: 'Take out the trash',
            },
            {
            id: 3,
            title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    }
  },
  methods: {
      addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>