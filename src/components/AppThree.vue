<template>
  <div class="app-three">
    <span v-if="seen">Now you see me</span><!--v-if="seen": if seen is true, whats in the span will be shown-->
  </div>
</template>

<script>
export default {
name: 'AppThree',
  //data: object that defines the component. we can access this properties in our template
  data() {
    return {
      seen: true
    }
  },
}
</script>