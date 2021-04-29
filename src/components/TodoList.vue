<!--Parent Component of TodoItem-->
<template>
 <div class="todo-list">
     <TodoItem/>
 </div>
</template>
 
<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name:'TodoList',
  components: {
      TodoItem
  }
}
</script>