<!--Child Component of ProfilePage-->
<template>
 <div id='account-info'>
 <button @click='changeUsername()'>Change Username</button>
   {{myUsername}}<!--this is the prop that we get from our parent-->
 </div>
</template>
 
<script>
export default {
name: 'AccountInfo',
//we verify the props that we receive from our parent.
//username: String: we want our username prop to only accept Strings
 props: {
   myUsername: String
 },
 //Here we put the methods that we are gonna use in this component
 methods: {
    //this method emits the event got from our parent component
   changeUsername() {
     this.$emit('changeUsername', 'Pepe')
   }
 }
}
</script>