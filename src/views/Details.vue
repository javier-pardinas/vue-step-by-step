<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">DETAILS</h1>
   <h2>the product id is: {{this.$route.params.Pid}}</h2>
  </div>
 </div>
</template>

<script>
 export default{
  name:'Details',
  data(){
   return{
    title:"Details"
   }
  }
 }
</script>