<template>
 <div class="list-rendering">
 <!--We can use the v-for directive to render a list of items based on an array-->
 <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
<button @click="items.push({ message: 'Baz' })">add item</button>
<!--<button @click="filterItems">Filter items</button>-->
<!--Inside v-for blocks we have full access to parent scope properties. v-for also supports an optional second argument for the index of the current item.-->
<ul id="example-2">
  <li v-for="(item, index) of items" :key="index">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<!--You can also use v-for to iterate through the properties of an object.-->
<ul id="v-for-object" class="demo">
  <li v-for="(value, i) in object" :key="i">
    {{ value }}
  </li>
</ul>
<!--You can also provide a second argument for the property’s name (a.k.a. key). And another for the index:-->
<div v-for="(value, name, index) in object" :key="index">
 {{ index }}. {{ name }}: {{ value }}
</div>
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
        ],
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
  },
  mounted() {

  },
  methods: {
    /*
    filterItems() {
      items = items.filter(item => {
        item.message.match(/Foo/)
      })
    }*/
  }
}
</script>