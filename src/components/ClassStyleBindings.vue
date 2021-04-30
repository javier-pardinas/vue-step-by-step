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
        //booleans for style classes:
        classObject: {
        'active': false,
        'text-danger': true
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