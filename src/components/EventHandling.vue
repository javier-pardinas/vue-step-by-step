<template>
  <div class="event-handling">
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <!-- `greet` is the name of a method defined below -->
        <button v-on:click="greet">Greet</button>
        <!--Instead of binding directly to a method name, we can also use methods in an inline JavaScript statement. 
        Sometimes we also need to access the original DOM event in an inline statement handler. 
        You can pass it into a method using the special $event variable-->
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">
         Submit
        </button>
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
  },
  warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
}
</script>