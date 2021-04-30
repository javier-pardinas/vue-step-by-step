<!--Child Component of TodoListExample-->
<template>
 <div class="todo-item-example">
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">Remove</button>
    </li>
 </div>
</template>
 
<script>
export default {
  name:'TodoItemExample',
  props: ['title']
}
</script>