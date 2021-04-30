<!--Parent Component of TodoItem-->
<template>
 <div class="todo-list-example">
    <TodoItemExample/>
 </div>
</template>
 
<script>
import TodoItemExample from "@/components/TodoItemExample.vue";

export default {
  name:'TodoListExample',
  components: {
    TodoItemExample
  }
}
</script>