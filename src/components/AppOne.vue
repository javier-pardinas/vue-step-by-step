<template>
  <div class="app-one">
  MESSAGE: {{message}}
  </div>
</template>

<script>
export default {
name: 'AppOne',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
}
</script>