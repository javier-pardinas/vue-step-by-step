<template>
  <div class="class-style-bindings">
  <!--We can pass an object to v-bind:class to dynamically toggle classes:-->
    <div v-bind:class="classObject">
    ClassStyleBindings
    </div>
  </div>
</template>

<script>
export default {
name: 'ClassStyleBindings',
data() {
    return {
    isActive: true,
    error: null
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