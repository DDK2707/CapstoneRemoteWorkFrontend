import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import userProfile from '../views/userProfile.vue'
import labelProfile from '../views/labelProfile.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/userProfile',
    name:'userProfile',
    component: userProfile
  },
  {
    path: '/labelProfile',
    name: 'labelProfile',
    component: labelProfile
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path:'/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
