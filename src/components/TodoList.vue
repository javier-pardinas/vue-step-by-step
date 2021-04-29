<!--Parent Component of TodoItem-->
<template>
 <div class="todo-list">
     <ol>
     <TodoItem
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"/>
     </ol>
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
     ]
    }
  },
  components: {
    TodoItem
  }
}
</script>