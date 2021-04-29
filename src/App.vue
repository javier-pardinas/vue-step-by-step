<template>
  <div id="app">
    <Counter/>
    <AppOne/>
    <AppTwo/>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
import AppOne from '@/components/AppOne';
import AppTwo from '@/components/AppTwo';

export default {
  name: 'App',
  components: {
    Counter,
    AppOne,
    AppTwo
  }
}
</script>
