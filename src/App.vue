<template>
  <div id="app">
    <Counter/>
    <AppOne/>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
import AppOne from '@/components/AppOne';

export default {
  name: 'App',
  components: {
    Counter,
    AppOne
  }
}
</script>
