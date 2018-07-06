import {auth} from 'firebase'

export default (to, from, next) => {
  const reqAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser =  auth().currentUser
  console.log(currentUser)
  if(reqAuth && currentUser) {
    next()
  } else {
    next('/login')
  }
}