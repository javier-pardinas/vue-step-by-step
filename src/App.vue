<template>
  <div id="app">
    <NavSlot>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/blog">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/services">Services</router-link>
      </li>
      <li class="nav-item">
      <router-link class="nav-link" to="/contact">Contact</router-link>
      </li>
    </NavSlot>
    <Counter/>
    <VuexTodos/>
    <router-view/>
  </div>
</template>

<script>
import NavSlot from '@/components/NavSlot';
import Counter from '@/components/Counter';
import VuexTodos from '@/components/VuexTodos';

export default {
  name: 'App',
  components: {
    NavSlot,
    Counter,
    VuexTodos
  },
}
</script>

<style>

</style>
