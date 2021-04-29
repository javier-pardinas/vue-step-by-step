<!--Parent Component of AccountInfo-->
<template>
 <div class="profile-page">
 <!--AccountInfo: This is a component-->
 <!--:username="user.username": this is a prop-->
   <AccountInfo 
   :my-username="user.username" 
   @changeUsername="changeUsername($event)"/> <!--@changeUsername: this is an event that we pass to the child to change the username-->
   {{oldUsername}}
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
     user: {
       username: 'matt'
     },
     oldUsername: null
   }
 },
 methods: {
   changeUsername (username) {
     this.user.username = username;
   }
 },
  watch: {
    username(newValue, oldValue) {
      this.user.username = newValue;
      this.oldUsername = oldValue;
    }
  }
}
</script>