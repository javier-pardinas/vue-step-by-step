<template>
  <div class="event-handling">
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>
</template>

<script>
export default {
name: 'EventHandling',
data() {
    return {
        counter: 0
    }
}
}
</script>