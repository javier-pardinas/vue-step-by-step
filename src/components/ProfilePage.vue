<!--Parent Component of AccountInfo-->
<template>
 <div class="profile-page">
 <!--AccountInfo: This is a component-->
   <AccountInfo username='pepe'/> <!--username='pepe': this is a prop-->
 </div>
</template>
 
<script>
import AccountInfo from "@/components/AccountInfo.vue";

export default {
  name:'ProfilePage',
  //here we add the components that we are gonna display inside this component
   components: {
   AccountInfo
 },
 data() {
   return {

   }
 }
}
</script>