import store from './store'

export default (to, from, next) => {
  console.log(to)
  if(store.getters.user) {
    next()
  } else {
    next('/login')
  }
}