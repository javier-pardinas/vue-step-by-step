<template>
  <div class="counter">
  COUNTER: {{counter}}<!--accesing data and display it-->
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
    /*setInterval(() => {
      this.counter++
    }, 1000)*/
  }
}
</script>