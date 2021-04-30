<template>
 <div class="list-rendering">
 <!--We can use the v-for directive to render a list of items based on an array-->
 <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
 </div>
</template>
 
<script>
export default {
  name:'ListRendering',
  data() {
      return {
        items: [
        { message: 'Foo' },
        { message: 'Bar' }
        ]
    }
  }
}
</script>