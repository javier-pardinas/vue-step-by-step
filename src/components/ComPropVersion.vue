<template>
 <div class="comp-prop-version">
    <div id="full-name">{{ fullName }}</div>
 </div>
</template>
 
<script>
export default {
  name:'CompPropVersion',
  data() {
    return {
    firstName: 'Foo',
    lastName: 'Bar'
    }
  },
  computed: {
   fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>