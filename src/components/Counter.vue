<template>
  <div class="counter">
    <h1>COUNTER</h1>
    <p>{{ count }}</p><!--computed property-->
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
   computed: {
    //count object from the state of the counter module
    count () {
	    return this.$store.getters.getCount
    }
  },
  methods: {
    //mutation increment
    increment () {
      this.$store.commit({
        type: 'increment',
        amount: 10
      })
    },
    //mutation decrement
    decrement () {
    	this.$store.commit({
        type: 'decrement',
        amount: 10
      })
    }
  }
}
</script>