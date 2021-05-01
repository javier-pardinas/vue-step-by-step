<template>
  <div id="app">
    <hr>
    <h1>Counter</h1>
    <Counter/>
    <hr>
    <h1>AppOne</h1>
    <AppOne/>
    <hr>
    <h1>AppTwo</h1>
    <AppTwo/>
    <hr>
    <h1>AppThree</h1>
    <AppThree/>
    <hr>
    <h1>AppFour</h1>
    <AppFour/>
    <hr>
    <h1>AppFive</h1>
    <AppFive/>
    <hr>
    <h1>AppSix</h1>
    <AppSix/>
    <hr>
    <h1>ProfilePage</h1>
    <ProfilePage/>
    <hr>
    <h1>TodoList</h1>
    <TodoList/>
    <hr>
    <h1>ComputedProperties</h1>
    <ComputedProperties/>
    <hr>
    <h1>ComPropVersion</h1>
    <ComPropVersion/>
    <hr>
    <h1>WatcherVersion</h1>
    <WatcherVersion/>
    <hr>
    <h1>ComputedSetter</h1>
    <ComputedSetter/> 
    <hr>
    <h1>WatchExample</h1>
    <WatchExample/>
    <hr>
    <h1>ClassStyleBindings</h1>
    <ClassStyleBindings/>
    <hr>
    <h1>ConditionalRendering</h1>
    <ConditionalRendering/>
    <hr>
    <h1>ListRendering</h1>
    <ListRendering/>
    <hr>
    <h1>ForWithIf</h1>
    <ForWithIf/>
    <hr>
    <h1>TodoListExample</h1>
    <TodoListExample/>
    <hr>
    <h1>EventHandling</h1>
    <EventHandling/>
    <hr>
    <h1>FormInputBindings</h1>
    <FormInputBindings/>
    <hr>
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
import ConditionalRendering from '@/components/ConditionalRendering';
import ListRendering from '@/components/ListRendering';
import ForWithIf from '@/components/ForWithIf';
import TodoListExample from '@/components/TodoListExample';
import EventHandling from '@/components/EventHandling';
import FormInputBindings from '@/components/FormInputBindings';

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
    ClassStyleBindings,
    ConditionalRendering,
    ListRendering,
    ForWithIf,
    TodoListExample,
    EventHandling,
    FormInputBindings
  },
  created() {
    alert("App Created!");
  }
}
</script>
