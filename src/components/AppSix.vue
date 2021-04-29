<template>
  <div class="app-six">
    <p>{{ message }}</p>
    <input v-model="message"><!--v-model="message": we get what the user types inside this input and put it inside our state message-->
  </div>
</template>

<script>
export default {
name: 'AppSix',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>