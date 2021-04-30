<template>
  <div class="event-handling">
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <!-- `greet` is the name of a method defined below -->
        <button v-on:click="greet">Greet</button>
    </div>
  </div>
</template>

<script>
export default {
name: 'EventHandling',
data() {
    return {
        counter: 0,
        name: 'Vue.js'
    }
},
methods: {
  greet(event) {
    // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
  }
}
}
</script>