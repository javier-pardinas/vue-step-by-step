<template>
 <div class="details">
  <div class="container">
   <div class="row">
    <div class="col-md-12" v-for="(product,index) in products" :key="index">
     <div v-if="proId == product.productId">
      <h1>{{product.productTitle}}</h1>
      <img :src="product.image" class="img-fluid">
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
 export default{
  name:'Details',
  data(){
   return{
    title:"Details",
    proId:this.$route.params.Pid,
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
  }
 }
</script>