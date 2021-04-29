<!--Child Component of TodoList-->
<template>
 <div class="todo-item">
     <li>{{todo.text}}</li>
 </div>
</template>
 
<script>
export default {
  name:'TodoItem',
  props: ['todo']
}
</script>