<!--Child Component of ProfilePage-->
<template>
 <div id='account-info'>
   {{username}}<!--this is the prop that we get from our parent-->
 </div>
</template>
 
<script>
export default {
name: 'AccountInfo',
props: ['username']//List of props that this component gets from its parent
}
</script>