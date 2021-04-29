<template>
  <div id="app">
    <Counter/>
    <AppOne/>
    <AppTwo/>
    <AppThree/>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
import AppOne from '@/components/AppOne';
import AppTwo from '@/components/AppTwo';
import AppThree from '@/components/AppThree';

export default {
  name: 'App',
  components: {
    Counter,
    AppOne,
    AppTwo,
    AppThree
  }
}
</script>
