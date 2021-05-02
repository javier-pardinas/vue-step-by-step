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
    <FetchPosts/>
    <router-view/>
  </div>
</template>

<script>
import NavSlot from '@/components/NavSlot';
import Counter from '@/components/Counter';
import VuexTodos from '@/components/VuexTodos';
import FetchPosts from '@/components/FetchPosts';

export default {
  name: 'App',
  components: {
    NavSlot,
    Counter,
    VuexTodos,
    FetchPosts
  },
}
</script>

<style>

</style>
