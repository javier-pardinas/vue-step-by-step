<template>
  <div class="counter">
  COUNTER: {{this.$store.state.count}}<!--accesing state of store and displaying it-->
  <button @click="increment">increment counter</button><!--executing method increment() that commits the mutation increment-->
  <br>
  <span v-once>This will never change: {{this.$store.state.count}}</span><!--perform one-time interpolations that do not update on data change by using the v-once directive-->
  </div>
</template>

<script>
export default {
  name: 'Counter',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      counter: 0
    }
  },
  //mounted: like componentDidMount(), this gets executed everytime the component is rerendered
  //everytime there is a change in the state of the component (data())
  mounted() {
    //this method sums 1 to the counter every second
   /* setInterval(() => {
      this.counter++
    }, 1000)*/
  },
  methods: {
    increment() {
    //commit mutation increment from store
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
  }
}
</script>