<template>
  <div class="app-two">
  <span v-bind:title="message"><!--with v-bind:title="message" when we hover over whats in the span we see the message of data()-->
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
  <br>
  <!--These expressions will be evaluated as JavaScript in the data scope of the owner Vue instance-->
  <span>{{ number + 1 }}</span>
  <br>
  <span>{{ ok ? 'YES' : 'NO' }}</span>
  <br>
  <span>{{ message.split('').reverse().join('') }}</span>
  <div v-bind:id="'myId-' + number"></div><!--Vue.js actually supports the full power of JavaScript expressions inside all data bindings-->
  </div>
</template>

<script>
export default {
name: 'AppTwo',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString(),//new Date().toLocaleString(): 29/04/2021 11:28:41
      number: 1,
      ok: true
    }
  },
}
</script>