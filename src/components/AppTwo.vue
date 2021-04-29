<template>
  <div class="app-two">
  <span v-bind:title="message"><!--with v-bind:title="message" when we hover over whats in the span we see the message of data()-->
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
  </div>
</template>

<script>
export default {
name: 'AppTwo',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()//new Date().toLocaleString(): 29/04/2021 11:28:41
    }
  },
}
</script>