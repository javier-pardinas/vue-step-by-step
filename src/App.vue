<template>
  <div id="app">
    <Counter/>
    <AppOne/>
    <AppTwo/>
    <AppThree/>
    <AppFour/>
    <AppFive/>
    <AppSix/>
    <ProfilePage/>
    <TodoList/>
    <ComputedProperties/>
    <ComPropVersion/>
    <WatcherVersion/>
    <ComputedSetter/> 
    <WatchExample/>
    <ClassStyleBindings/>
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
import ProfilePage from '@/components/ProfilePage';
import TodoList from '@/components/TodoList';
import ComputedProperties from '@/components/ComputedProperties';
import ComPropVersion from '@/components/ComPropVersion';
import WatcherVersion from '@/components/WatcherVersion';
import ComputedSetter from '@/components/ComputedSetter';
import WatchExample from '@/components/WatchExample';
import ClassStyleBindings from '@/components/ClassStyleBindings';

export default {
  name: 'App',
  components: {
    Counter,
    AppOne,
    AppTwo,
    AppThree,
    AppFour,
    AppFive,
    AppSix,
    ProfilePage,
    TodoList,
    ComputedProperties,
    ComPropVersion,
    WatcherVersion,
    ComputedSetter,
    WatchExample,
    ClassStyleBindings
  },
  created() {
    alert("App Created!");
  }
}
</script>
