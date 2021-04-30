<template>
  <div class="class-style-bindings">
  <!--We can pass an array to v-bind:class to apply a list of classes:-->
   <div v-bind:class="[activeClass, errorClass]">
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