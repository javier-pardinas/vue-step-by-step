<template>
  <div class="class-style-bindings">
  <!--If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression:-->
   <!--This will always apply errorClass, but will only apply activeClass when isActive is truthy.-->
   <div v-bind:class="[isActive ? activeClass : '', errorClass]">
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