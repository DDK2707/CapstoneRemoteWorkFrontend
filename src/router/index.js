import { createRouter, createWebHashHistory } from 'vue-router'
import Timeline from '../views/Timeline.vue'
import About from '../views/About.vue'
import userProfile from '../views/userProfile.vue'
import updateProfile from '../views/updateProfile.vue'
import createPost from '../views/createPost.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/userProfile',
    name:'userProfile',
    component: userProfile,
    meta: {requiresAuth: true}
  },
  {
    path: '/updateProfile',
    name: 'updateProfile',
    component: updateProfile,
    meta: {requiresAuth: true}
  },
  {
    path:'/createPost',
    name:'createPost',
    component: createPost,
    meta: {requiresAuth: true}
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path:'/',
    name:'login',
    component: Login,
    meta: {guest: true}
  },
  {
    path:'/register',
    name: 'register',
    component: Register,
    meta: {guest: true}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
