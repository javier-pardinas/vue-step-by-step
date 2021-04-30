<template>
 <div class="list-rendering">
 <!--We can use the v-for directive to render a list of items based on an array-->
 <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
<!--Inside v-for blocks we have full access to parent scope properties. v-for also supports an optional second argument for the index of the current item.-->
<ul id="example-2">
  <li v-for="(item, index) of items" :key="index">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
 </div>
</template>
 
<script>
export default {
  name:'ListRendering',
  data() {
      return {
        parentMessage: 'Parent',
        items: [
        { message: 'Foo' },
        { message: 'Bar' }
        ]
    }
  }
}
</script>