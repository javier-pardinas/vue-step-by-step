<!--Computed properties are by default getter-only, but you can also provide a setter when you need it:-->
<template>
 <div class="computed-setter">
    <div id="full-name">{{ fullName }}</div>
 </div>
</template>
 
<script>
export default {
  name:'ComputedSetter',
  data() {
    return {
    firstName: 'Foo',
    lastName: 'Bar'
    }
  },
  computed: {
    fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      let names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
    /*Now when you run this.fullName = 'John Doe', the setter will be invoked 
    and this.firstName and this.lastName will be updated accordingly. */
  }
  }
}
</script>