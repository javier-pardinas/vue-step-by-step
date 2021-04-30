<!--Computed properties are by default getter-only, but you can also provide a setter when you need it:-->
<template>
 <div class="conditional-rendering">
<div v-if="Math.random() <= 0.5">
  FAIL
</div>
<div v-else-if="Math.random() <= 0.9">
  PASS
</div>
<div v-else>
  WELL DONE
</div>
 <!------------------------------------------>
<div v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</div>
<div v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</div>
</div>
</template>
 
<script>
export default {
  name:'ConditionalRendering',
  data() {
      return {
          loginType: 'username'
      }
  }
}
</script>