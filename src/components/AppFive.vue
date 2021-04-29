<template>
  <div class="app-five">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button><!--To let users interact with your app, we can use the v-on directive to attach event listeners that invoke methods on our Vue instances-->
  </div>
</template>

<script>
export default {
name: 'AppFive',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  //Here we put the methods that we are gonna use in this component
  methods: {
    //This method reverse the message objetc of data()
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>