<template>
  <div class="class-style-bindings">
  <!--We can pass an object to v-bind:class to dynamically toggle classes:-->
    <div class="static"
    v-bind:class="{ 'active': isActive, 'text-danger': hasError }">
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
        isActive: false,
        hasError: true
    }
}
}
</script>

<style>
.static {
text-transform: uppercase;
}
.active {
color: green;
}
.text-danger {
color:red;
}
</style>