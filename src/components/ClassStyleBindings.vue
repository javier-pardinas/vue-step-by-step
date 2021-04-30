<template>
  <div class="class-style-bindings">
  <!--It is often a good idea to bind to a style object directly so that the template is cleaner:-->
   <div v-bind:style="styleObject">
   ClassStyleBindings
   </div>
  </div>
</template>

<script>
export default {
name: 'ClassStyleBindings',
data() {
    return {
    styleObject: {
    color: 'red',
    fontSize: '13px'
    }
  }
},
computed: {

}
}
</script>

<style>

</style>