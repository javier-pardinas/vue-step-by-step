<template>
  <div id="app">
    <Counter/>
    <AppOne/>
    <AppTwo/>
    <AppThree/>
    <AppFour/>
    <AppFive/>
    <AppSix/>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
import AppOne from '@/components/AppOne';
import AppTwo from '@/components/AppTwo';
import AppThree from '@/components/AppThree';
import AppFour from '@/components/AppFour';
import AppFive from '@/components/AppFive';
import AppSix from '@/components/AppSix';

export default {
  name: 'App',
  components: {
    Counter,
    AppOne,
    AppTwo,
    AppThree,
    AppFour,
    AppFive,
    AppSix
  }
}
</script>
