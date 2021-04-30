<template>
  <div class="class-style-bindings">
  <!--it’s also possible to use the object syntax inside array syntax:-->
   <div v-bind:class="[{ active: isActive }, errorClass]">
   ClassStyleBindings
   </div>
  </div>
</template>

<script>
export default {
name: 'ClassStyleBindings',
data() {
    return {
  activeClass: 'active',
  errorClass: 'text-danger'
    }
},
computed: {
//We can also bind to a computed property that returns an object. 
//This is a common and powerful pattern:
 classObject() {
    return {
      'active': this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
}
</script>

<style>
.active {
color: green;
}
.text-danger {
color:red;
}
</style>