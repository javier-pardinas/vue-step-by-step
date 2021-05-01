<template>
  <div class="home">
    <h1>Home</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h2 @click="goToDetails()">{{data.productTitle}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products:[
      {
        productTitle:"ABCN",
        image       : require('../assets/product2.jpg'),
        productId:1
      },
      {
        productTitle:"KARMA",
        image       : require('../assets/product3.jpg'),
        productId:2
      },
      {
        productTitle:"Tino",
        image       : require('../assets/product5.jpg'),
        productId:3
      },
      {
        productTitle:"EFG",
        image       : require('../assets/product6.jpg'),
        productId:4
      }
      ]
    }
  },
  methods: {
  goToDetails() {
    this.$router.push({name:'Details'})
  }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
