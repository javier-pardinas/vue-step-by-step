<template>
  <div class="app-four">
     <ol>
    <li v-for="(todo, i) in todos" v-bind:key="i"><!--v-for: so we can loop through the array of objects and access the properties of each object-->
      {{ todo.text }}
    </li>
  </ol>
  </div>
</template>

<script>
export default {
name: 'AppFour',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
    }
  },
}
</script>