<!--Parent Component of TodoItem-->
<template>
 <div class="todo-list">
     <ol>
     <TodoItem
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"/>
     </ol>
     <a v-bind:href="url"> Vue.js Guide </a><!--Here href is the argument, which tells the v-bind directive to bind the element’s href attribute to the value of the expression url-->
 </div>
</template>
 
<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name:'TodoList',
  data() {
      return {
     groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
     ],
     url: "https://vuejs.org/v2/guide/syntax.html"
    }
  },
  components: {
    TodoItem
  }
}
</script>