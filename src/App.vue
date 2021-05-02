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
    <router-view/>
  </div>
</template>

<script>
import NavSlot from '@/components/NavSlot';
import Counter from '@/components/Counter';

export default {
  name: 'App',
  components: {
    NavSlot,
    Counter
  },
}
</script>

<style>

</style>
