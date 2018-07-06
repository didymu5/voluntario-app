import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'
import Login from './views/Login.vue'

// import AuthGuard from './auth-guard'
import {auth} from 'firebase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {
        requiresAuth: true
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})
const AuthGuard = (to, from, next) => {
  const reqAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser =  auth().currentUser
  console.log(currentUser)
  if(reqAuth && currentUser) {
    next()
  } else {
    next('/login')
  }
}
