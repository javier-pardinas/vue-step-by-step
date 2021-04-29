<!--Child Component of ProfilePage-->
<template>
 <div id='account-info'>
   {{username}}<!--this is the prop that we get from our parent-->
 </div>
</template>
 
<script>
export default {
name: 'AccountInfo',
//we verify the props that we receive from our parent.
//username: String: we want our username prop to only accept Strings
 props: {
   username: String
 }
}
</script>