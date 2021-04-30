<template>
  <div class="app-five">
  <!--  <li v-for="todo in todos" :key="todo" v-if="!todo.isComplete" >
  {{ todo }}
    </li>-->
    <ul v-if="todos.length">
        <li v-for="todo in todos" :key="todo.id">
        {{ todo.task }}
        </li>
    </ul>
    <p v-else>No todos left!</p>
  </div>
</template>

<script>
export default {
name: 'ForWithIf',
data() {
    return {
        todos: [
            {
                id: 1,
                task: "Do Something"
            },
            {
                id: 2,
                task: "Do another thing"
            },
            {
                id: 3,
                task: "And the other thing..."
            }
        ]
    }
}
}
</script>