import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import Blog from '@/views/Blog';
import Services from '@/views/Services';
import Contact from '@/views/Contact';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
