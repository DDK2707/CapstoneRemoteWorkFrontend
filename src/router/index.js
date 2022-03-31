import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store"
import Timeline from '../views/Timeline.vue'
import About from '../views/About.vue'
import userProfile from '../views/userProfile.vue'
import updateProfile from '../views/updateProfile.vue'
import createPost from '../views/createPost.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from , next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isAuthenticated) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.guest)) {
    if(store.getters.isAuthenticated) {
      next("/timeline");
      return
    }
    next();
  } else {
    next()
  }
});

export default router
