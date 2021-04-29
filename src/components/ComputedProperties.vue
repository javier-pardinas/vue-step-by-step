<template>
 <div class="computed-properties">
    <p>Original message: {{ message }}</p>
    <p>Computed reversed message: {{ reversedMessage }}</p>
 </div>
</template>
 
<script>
export default {
  name:'ComputedProperties',
  data() {
    return {
      message: 'Hello'
    }
  },
  //when you need to change the presentation of existing data, you'll use computed properties
  computed: {
    // a computed getter
    reversedMessage() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  //when you need to change data, you will use methods
  methods: {

  }
}
</script>