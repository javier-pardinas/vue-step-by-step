<template>
  <div class="class-style-bindings">
  <!--The object syntax for v-bind:style is pretty straightforward - it looks almost like CSS, except it’s a JavaScript object. You can use either camelCase or kebab-case (use quotes with kebab-case) for the CSS property names:-->
   <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
   ClassStyleBindings
   </div>
  </div>
</template>

<script>
export default {
name: 'ClassStyleBindings',
data() {
    return {
    activeColor: 'red',
    fontSize: 30
    }
},
computed: {

}
}
</script>

<style>

</style>