<template>
 <div class="vuex-todos">
     <h1>VuexTodos</h1>
     <input v-model="todoId"/>
     <h2>Todo Search:</h2>
     <h3>{{getTodoById.text}}</h3>
     <h2>Number of todos done:</h2>
     <h3>{{doneTodosCount}}</h3>
    <h2>List of todos done:</h2>
     <div v-for="todoDone in doneTodos" :key="todoDone.id">
         <span>{{todoDone.text}}</span>
     </div>
 </div>
</template>
 
<script>
export default {
    name:'VuexTodos',
    data() {
      return {
          todoId: null
      }
    },
    computed: {
    //todos with done: true
    doneTodos() {
        return this.$store.getters.doneTodos
    },
    //number of todos with done:true
    doneTodosCount() {
    return this.$store.getters.doneTodosCount
    },
    //get todo by id:
    getTodoById() {
    return this.$store.getters.getTodoById(2)
    }
  },
}
</script>