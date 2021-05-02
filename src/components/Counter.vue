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
    //count object of the state of store
    count () {
	    return this.$store.state.count
    }
  },
  methods: {
    //mutation increment
    increment () {
      this.$store.commit('increment', 10)
    },
    //mutation decrement
    decrement () {
    	this.$store.commit('decrement', 10)
    }
  }

}
</script>